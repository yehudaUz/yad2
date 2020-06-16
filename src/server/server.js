// const { Advertisement } = require('../database/models/advertisement')
const express = require('express');
require('dotenv').config()

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

require('../database/mongoose')
const userRouter = require('../database/models/user')
const carAdvertisementRouter = require('../database/models/carAdvertisment')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router = require('../server/routers')
app.use('/', router)
app.use(userRouter)
// app.use(Advertisemadsent)
app.use(carAdvertisementRouter)


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("App start listening on " + process.env.PORT || 8080)
});