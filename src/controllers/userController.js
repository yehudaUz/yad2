const express = require('express')
const bodyParser = require('body-parser')
require('../database/mongoose')
const multer = require('multer')
const User = require('../database/models/user')
const auth = require('../database/middleware/auth')
const carAd = require('../database/models/carAdvertisment')
const router = new express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
require('../database/mongoose')
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

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
            resolve(data.Location)
        });
    });
};

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.toLocaleLowerCase().match(/\.(jpg|jpeg|png|bmp)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
}).any('photo')

const uploadAsync = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError)
                console.log("multer error", err)
            else if (err)
                console.log("unknow error when uploading pic", err)
            if (err !== undefined)//(err !== null)
                /*return*/ reject(err);
            resolve();
        });
    });
}

module.exports.fetchSellerData = async (req, res) => {
    User.findById(req.body.userId, (err, user) => {
        if (err)
            res.status(500).send({ error: err })
        res.status(200).send(JSON.stringify({ name: user.name, email: user.email, phone: user.phoneNumber }))
    })
}

module.exports.postNewAd = async (req, res) => {
    await auth(req, res)
    try {
        uploadAsync(req, res).then(async () => {
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
        })
    } catch (e) {
        res.status(400).send({ error: e.message })

    }
}

module.exports.signup = async (req, res) => {
    const user = new User(req.body)
    try {
        const found = await User.findOne({ $or: [{ name: req.body.email }, { email: req.body.password }] })
        if (found)
            return res.send('Same user-name or email already exist!')
        await user.save()
        res.status(201).send('Signup complete succeefuly!!!')
    } catch (e) {
        console.log(e.message)
        return res.status(400).send('password too short or email invalid!')
    }
}

module.exports.login = async (req, res) => {
    console.log(req.body.email)
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('Authorization', token)
        res.redirect("/personalArea")
    } catch (e) {
        res.status(400).send('login failed!' + e);//redirect('/')
    }
}

module.exports.logOut = async (req, res) => {
    try {
        await auth(req, res)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports.getUserData = async (req, res) => {
    await auth(req, res)
    res.status(200).send({ body: req.user })
}
