const mongoose = require('mongoose')
const carAdvertisementSchema = new mongoose.Schema({
    maker: {
        type: String,
        required: true,
        trim: true
    }, model: {
        type: String,
        required: true,
        trim: true
    }, year: {
        type: Number,
        trim: true
    }, hand: {
        type: Number,
        required: false,
        trim: true
    }, engineCc: {
        type: Number,
        required: false,
        trim: true
    }, engineType: {
        type: String,
        required: false,
        trim: true
    }, area: {
        type: String,
        trim: true
    }, freeText: {
        type: String,
        required: false,
        trim: true
    }, km: {
        type: Number,
        trim: true
    },
    engingType: {
        type: String,
        required: false,
        trim: true
    },
    transmitionType: {
        type: String,
        required: false,
        trim: true
    }, dateOnTheRoad: {
        type: Date,
        required: false,
        trim: true
    }, testUntil: {
        type: Date,
        required: false,
        trim: true
    }, lastOwnership: {
        type: String,
        required: false,
        trim: true
    }, ownership: {
        type: String,
        required: false,
        trim: true
    }, isReplaceOk: {
        type: Boolean,
        required: false,
        trim: true
    }, color: {
        type: String,
        required: false,
        trim: true
    }, isFitToDisability: {
        type: Boolean,
        required: false,
        trim: true
    }, imgsLinks: [{ type: String }],
    price: {
        type: Number,
        trim: true
    }, userId: {
        type: String
    }
}, { timestamps: true },
    { "versionKey": false }
)

const CarAdvertisement = mongoose.model('CarAdvertisement', carAdvertisementSchema)

module.exports = CarAdvertisement
