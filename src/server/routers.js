const express = require('express')
// const path = require('path')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../database/models/user')
const auth = require('../database/middleware/auth')
const carAd = require('../database/models/carAdvertisment')
// console.log("carad",carAd)
const router = new express.Router()
require('../database/mongoose')
// const fs = require('fs')

const fs = require('fs');
const AWS = require('aws-sdk');
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

router.post('/carSearchInitial', async (req, res) => {
    carAd.find({}, function (err, records) {
        if (err) {
            console.log("errr", err, records)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
        }
        console.log("QQQQ", { "body": records })//.slice(0, 2) })
        res.send({ "body": records })//.slice(0, 2) });
    });
    // carAd.findOne({ "_id": "5ee908deed44d847b0585267" }).limit(5).then((err, records) => {
    //     if (err) {
    //         console.log("errr", err, records)
    //         return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
    //     }
    //     console.log("QQQQ", records)
    //     res.send({ "body": records });
    //     // res.status(200).send({ "body": "VERY COOL" })
    // });

})


const uploadFileToAwsBucket = (file, counter, userId) => {
    //  fs.readFile(file.buffer, (err, data) => {
    // if (err) throw err;
    // const base64Data = new Buffer(JSON.stringify(file.buffer)).toString("base64");
    const params = {
        Bucket: 'yad2-pics', // pass your bucket name
        Key: userId + "/img" + counter + "." + file.mimetype.split("/")[1], // file will be saved as testBucket/contacts.csv
        Body: file.buffer//JSON.stringify(file.buffer, null, 2)
    };
    s3.upload(params, function (s3Err, data) {
        if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`)
    });
    // });
};


router.post('/postNewAd', auth, upload.any('photo'), async (req, res) => {
    // console.log(req.file)
    // console.log(req.body)
    // console.log("User: " + req.user)
    const ad = new carAd(req.body)
    // console.log("AD",ad)
    // ad.userId = req.user._id
    const userId = req.user._id
    const files = req.files;
    if (files) {
        // ad.imgs = []
        counter = 0
        files.forEach((file) => {
            console.log(file)
            uploadFileToAwsBucket(file, counter, userId)
            counter++
            // const base64Data = new Buffer(JSON.stringify(file.buffer)).toString("base64");
            // ad.imgs.push({ contentType: file.mimetype, data: file.buffer, encoding: file.encoding })//"base64"})//file.encoding })
        })
    }

    await ad.save()
    // console.log("AAAAAADDDDDDDD", ad)
    req.user.ads.push(ad._id)
    await req.user.save()
    // carAd.findOne({ "_id": ad._id }, function (err, oneAdRecord) {
    //     // console.log("QQQQ", oneAdRecord)
    //     res.set("Content-Type", oneAdRecord.imgs[0].contentType);
    //     res.send(oneAdRecord.imgs[0].data);
    // });
    // res.status(201).send('New ad added succeefuly!!!')
    // console.log("USER: " + req.user)
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