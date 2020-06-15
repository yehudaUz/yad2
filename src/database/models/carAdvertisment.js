const mongoose = require('mongoose')
const {  Advertisement } = require('./advertisement')
// console.log(advertisementSchema)

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
        required: true,
        trim: true
    }, hand: {
        type: Number,
        required: false,
        trim: true
    }, engineCc: {
        type: Number,
        required: false,
        trim: true
    }, area: {
        type: String,
        required: true,
        trim: true
    }, freeText: {
        type: String,
        required: false,
        trim: true
    }, km: {
        type: Number,
        required: true,
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
    }, ownership: {
        type: String,
        required: false,
        trim: true
    }, isReplaceOk: {
        type: Boolean,
        required: false,
        trim: true
    }, isFitToDisability: {
        type: Boolean,
        required: false,
        trim: true
    }
})

// var Original = mongoose.model('Original', OriginalSchema);
// var NewSch = Original.discriminator('NewSch', NewSchema);

// const tempCarAdvertisement = mongoose.model('tempCarAdvertisement', carAdvertisementSchema)
// const CarAdvertisement = tempCarAdvertisement.discriminator("CarAdvertisemen", advertisementSchema)
const CarAdvertisement = Advertisement.discriminator("CarAdvertisement", carAdvertisementSchema)

module.exports = CarAdvertisement //CarAdvertisementSchema
