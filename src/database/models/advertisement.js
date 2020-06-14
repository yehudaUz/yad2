const mongoose = require('mongoose')

//  [{
//     maker: "", model: "", price: "", year: "", hand: "", engineCc: "", area: "", freeText: "", km: "",
//     engingType: "", transmitionType: "", dateOnTheRoad: "", testUntil: "", ownership: "", isReplaceOk: "",
//     isFitToDisability: ""
// }]
const advertisementSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    maker: {
        type: String,
        required: true,
        trim: true
    }, model: {
        type: String,
        required: true,
        trim: true
    }, price: {
        type: Number,
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
}, {
    timestamps: true
})

const Advertisement = mongoose.model('Advertisement', advertisementSchema)

module.exports = Advertisement