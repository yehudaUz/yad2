const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../database/models/user')
const auth = require('../database/middleware/auth')
const carAd = require('../database/models/carAdvertisment')
const router = new express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
require('../database/mongoose')
const AWS = require('aws-sdk');
// const { json } = require('body-parser')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.toLocaleLowerCase().match(/\.(jpg|jpeg|png|bmp)$/)) {
            console.log(file.originalname)
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

process.on('uncaughtException', (err, origin) => {
    //mail.send("me",{err,origin})
    console.log(err)
    process.exit(1)
});

router.post('/carSearch', async (req, res) => {
    console.log("RRRRRRRRRRRRRRRR", req.body)
    let mongooseSearchObj = req.body.carSearchParams
    Object.entries(mongooseSearchObj).forEach(keyValue => {
        if (keyValue[1] === "" || keyValue[1] === [] || keyValue[1] === undefined)
            delete mongooseSearchObj[keyValue[0]]
    })
    console.log("MMM", mongooseSearchObj)
    if (mongooseSearchObj === undefined || Object.keys(mongooseSearchObj).length === 0)
        mongooseSearchObj = {};
    else {
        const keys = Object.keys(mongooseSearchObj);
        if (keys.includes("fromPrice"))
            mongooseSearchObj.price = { "$gte": mongooseSearchObj["fromPrice"] }
        if (keys.includes("toPrice")) {
            if (!Object.keys(mongooseSearchObj).includes("price"))
                mongooseSearchObj.price = { "$lte": mongooseSearchObj["toPrice"] }
            else
                mongooseSearchObj.price = { "$gte": mongooseSearchObj["fromPrice"], "$lte": mongooseSearchObj["toPrice"] }
        }
        delete mongooseSearchObj["fromPrice"]; delete mongooseSearchObj["toPrice"]

        if (keys.includes("fromYear"))
            mongooseSearchObj.year = { "$gte": mongooseSearchObj["fromYear"] }
        if (keys.includes("toYear")) {
            if (!Object.keys(mongooseSearchObj).includes("year"))
                mongooseSearchObj.year = { "$lte": mongooseSearchObj["toYear"] }
            else
                mongooseSearchObj.year = { "$gte": mongooseSearchObj["fromYear"], "$lte": mongooseSearchObj["toYear"] }
        }
        delete mongooseSearchObj["fromYear"]; delete mongooseSearchObj["toYear"]

        if (keys.includes("withPrice") && mongooseSearchObj["withPrice"]) 
            if (!Object.keys(mongooseSearchObj).includes("price"))
            mongooseSearchObj.price = { $ne: null } 
        
        delete mongooseSearchObj["withPrice"];


        if (keys.includes("withPhoto") && mongooseSearchObj["withPhoto"]) {
            mongooseSearchObj["imgsLinks.0"] = { "$exists": true }
        }
        delete mongooseSearchObj["withPhoto"];

        console.log("Aaa")
        Object.entries(mongooseSearchObj).map(keyValue => {
            if (keyValue[0] && Array.isArray(keyValue[1]) && keyValue[1].length === 0)
                delete mongooseSearchObj[keyValue[0]]
        })
    }


    let sortBy = req.body.sortBy ? req.body.sortBy : undefined
    if (sortBy && sortBy !== undefined && sortBy !== "" && sortBy != null) {
        switch (sortBy) {
            case "byDate":
                sortBy = "-updatedAt"
                break;
            case "byPriceLowToHigh":
                sortBy = "price"
                break;
            case "ByPriceHighToLow":
                sortBy = "-price"
                break;
            case "byKmLowToHigh":
                sortBy = "km"
                break;
            case "byYearHighToLow":
                sortBy = "-year"
                break;
            default:
                console.log("UNKNOWN SORTBY OPTION!!!!!")
        }
    }
    console.log("sortBy", sortBy)
    console.log("mongooseSearchObj", mongooseSearchObj)
    carAd.find(mongooseSearchObj, function (err, records) {
        if (err) {
            // console.log("errr", err, records)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
        }
    }).sort(sortBy).then((records) => {
        console.log("in")

        // console.log("SEND RECORD", records)
        res.send({ "body": records })
    });
})

router.post('/carSearchInitial', async (req, res) => {
    carAd.find({}, function (err, records) {
        if (err) {
            console.log("errr", err, records)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
        }
        res.send({ "body": records })
    });
})


let counter = 0;
const uploadFileToAwsBucket = async (file, userId) => {
    counter++;
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'yad2-pics',
            Key: userId + "/img" + counter + "." + file.mimetype.split("/")[1],
            Body: file.buffer
        };
        s3.upload(params, function (s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
            resolve(data.Location)
        });
    });
};

router.post('/getUserData', auth, async (req, res) => {
    res.status(200).send({ body: req.user })
})

router.post('/postNewAd', auth, upload.any('photo'), async (req, res) => {
    try {
        const ad = new carAd(req.body)
        const userId = req.user._id
        ad.userId = userId
        const files = req.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                uploadFileToAwsBucket(file, userId).then(async imgLink => {
                    ad.imgsLinks.push(imgLink)
                    if (i === files.length - 1) {
                        await ad.save()
                        req.user.ads.push(ad._id)
                        await req.user.save()
                        res.status(200).send("Upload success!")
                    }
                })
            }
        } else {
            await ad.save()
            req.user.ads.push(ad._id)
            await req.user.save()
            res.status(200).send("Upload success! *U should upload pics to make your ad better.")
        }
    } catch (e) {
        res.status(400).send({ error: e.message })

    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.post('/signup', async (req, res) => {
    // console.log(req.body)
    const user = new User(req.body)
    try {
        const found = await User.findOne({ $or: [{ name: req.body.email }, { email: req.body.password }] })
        if (found)
            return res.send('Same user-name or email already exist!')

        await user.save()
        //sendWelcomeEmail(user.email, user.name)
        //const token = await user.generateAuthToken()
        //res.status(201).send({ user, token })
        res.status(201).send('Signup complete succeefuly!!!')

    } catch (e) {
        console.log(e.message)
        return res.status(400).send('password too short or email invalid!')
    }
})

router.post('/login', async (req, res) => {
    console.log("trying login")
    console.log(req.body.email)
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('Authorization', token)
        console.log(JSON.stringify(user))
        res.redirect("/personalArea")
    } catch (e) {
        res.status(400).send('login failed!' + e);//redirect('/')
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        // sendCancelationEmail(req.user.email, req.user.name)
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})



router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})

router.get('*', async (req, res) => {
    return res.redirect('/')
})

router.get(/html$/, async (req, res) => {
    res.redirect('/')
})

router.get(function (req, res, next) {
    if ((req.path.indexOf('html') >= 0)) {
        res.redirect('/login');
    }
});


module.exports = router