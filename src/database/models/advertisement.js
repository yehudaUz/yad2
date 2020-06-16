// const mongoose = require('mongoose')

//  [{
//     maker: "", model: "", price: "", year: "", hand: "", engineCc: "", area: "", freeText: "", km: "",
//     engingType: "", transmitionType: "", dateOnTheRoad: "", testUntil: "", ownership: "", isReplaceOk: "",
//     isFitToDisability: ""
// }]
const advertisement = ({
    //Schema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    price: {
        type: Number,
        required: true,
        trim: true
    }, userId: {
        type: String
    }
}, {
    timestamps: true
}, { "versionKey": false })

// const Advertisement = mongoose.model('Advertisement', advertisementSchema)

module.exports = {
    // Advertisement,
    // advertisementSchema
    advertisement
}