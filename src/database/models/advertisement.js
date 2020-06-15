const mongoose = require('mongoose')

//  [{
//     maker: "", model: "", price: "", year: "", hand: "", engineCc: "", area: "", freeText: "", km: "",
//     engingType: "", transmitionType: "", dateOnTheRoad: "", testUntil: "", ownership: "", isReplaceOk: "",
//     isFitToDisability: ""
// }]
const advertisementSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    price: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
}, { "versionKey": false })

const Advertisement = mongoose.model('Advertisement', advertisementSchema)

module.exports = {
    Advertisement,
    advertisementSchema
}