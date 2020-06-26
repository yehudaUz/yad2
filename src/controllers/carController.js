const carAd = require('../database/models/carAdvertisment')
const User = require('../database/models/user')

module.exports.carSearchInitial = () => {
    carAd.find({}, function (err, records) {
        if (err) {
            console.log("errr", err, records)
            return res.status(500).send({ body: "Sorry, internal error when searched for document in database" })
        }
        res.send({ "body": records })
    });
}

module.exports.fetchSellerData = async (req, res) => {
    console.log("Zzzzzzzzzz",req.body.userId)
    User.findById(req.body.userId, (err, user) => {
        if (err)
            res.status(500).send({ error: err })
        res.status(200).send(JSON.stringify({ name: user.name, email: user.email, phone: user.phoneNumber }))
    })
}