const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors')
app.use(cors())


require('../database/mongoose')
const userRouter = require('../database/models/user')
const carAdvertisementRouter = require('../database/models/carAdvertisment')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const router = require('../server/routers')
app.use('/', router)
app.use(userRouter)
app.use(carAdvertisementRouter)



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App start listening on " + PORT)
});