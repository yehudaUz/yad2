const express = require('express')
const bodyParser = require('body-parser')
require('../database/mongoose')
const carAd = require('../database/models/carAdvertisment')
const router = new express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
require('../database/mongoose')

module.exports.carSearchInitial = async (req, res) => {
    carAd.find({}, (err, records) => {
        if (err) {
            console.log("errr", err, records)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
        }
        res.send({ "body": records })
    });
}

module.exports.carSearch = async (req, res) => {
    let mongooseSearchObj = req.body.carSearchParams || {}
    Object.entries(mongooseSearchObj).forEach(keyValue => {
        if (keyValue[1] === "" || keyValue[1] === [] || keyValue[1] === undefined)
            delete mongooseSearchObj[keyValue[0]]
    })

    if (mongooseSearchObj.fromPrice)
        mongooseSearchObj.price = { "$gte": mongooseSearchObj["fromPrice"] }
    if (mongooseSearchObj.toPrice) {
        if (!mongooseSearchObj.price)
            mongooseSearchObj.price = { "$lte": mongooseSearchObj["toPrice"] }
        else
            mongooseSearchObj.price = { "$gte": mongooseSearchObj["fromPrice"], "$lte": mongooseSearchObj["toPrice"] }
    }
    delete mongooseSearchObj["fromPrice"]; delete mongooseSearchObj["toPrice"]

    if (mongooseSearchObj.fromYear)
        mongooseSearchObj.year = { "$gte": mongooseSearchObj["fromYear"] }
    if (mongooseSearchObj.toYear) {
        if (!mongooseSearchObj.year)
            mongooseSearchObj.year = { "$lte": mongooseSearchObj["toYear"] }
        else
            mongooseSearchObj.year = { "$gte": mongooseSearchObj["fromYear"], "$lte": mongooseSearchObj["toYear"] }
    }
    delete mongooseSearchObj["fromYear"]; delete mongooseSearchObj["toYear"]

    if (mongooseSearchObj.withPrice && mongooseSearchObj["withPrice"])
        if (!mongooseSearchObj.price)
            mongooseSearchObj.price = { $ne: null }

    delete mongooseSearchObj["withPrice"];


    if (mongooseSearchObj.withPhoto && mongooseSearchObj["withPhoto"]) {
        mongooseSearchObj["imgsLinks.0"] = { "$exists": true }
    }
    delete mongooseSearchObj["withPhoto"];

    Object.entries(mongooseSearchObj).map(keyValue => {
        if (keyValue[0] && Array.isArray(keyValue[1]) && keyValue[1].length === 0)
            delete mongooseSearchObj[keyValue[0]]
    })

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

    
    carAd.find(mongooseSearchObj, function (err, records) {
        if (err)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
    }).sort(sortBy).then((records) => {
        res.send({ "body": records })
    });
}

