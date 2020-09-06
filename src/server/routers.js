const express = require('express')
const bodyParser = require('body-parser')
const router = new express.Router()
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
let reqPath = path.join(__dirname, '../../')
router.use(express.static(path.join(reqPath, 'build')));

const searchController = require('../controllers/searchController')
const userController = require('../controllers/userController')

process.on('uncaughtException', (err, origin) => {
    console.log(err)
    process.exit(1)
});

router.post('/carSearch', searchController.carSearch)

router.post('/carSearchInitial', searchController.carSearchInitial)

router.post('/getUserData', userController.getUserData)

router.post('/fetchSellerData', userController.fetchSellerData)

router.post('/postNewAd', userController.postNewAd)

router.post('/signup', userController.signup)

router.post('/login', userController.login)

router.post('/users/logout', userController.logOut)

// router.get('*', async (req, res) => { return res.redirect('/') })

// router.get(/html$/, async (req, res) => { res.redirect('/') })

// router.get(async (req, res, next) => {
//     if ((req.path.indexOf('html') >= 0)) {
//         res.redirect('/');
//     }
// });

router.get('/*', (req, res) => {
    res.sendFile(path.join(reqPath, 'build', 'index.html'));
});

module.exports = router