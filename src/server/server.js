const express = require('express');
require('dotenv').config()

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

require('../database/mongoose')
const userRouter = require('../database/models/user')
const taskRouter = require('../database/models/task')

// const app = express()

app.use(express.json())
const routers = require('./routers')
app.use(routers)
app.use(userRouter)
app.use(taskRouter)


app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("App start listening on " + process.env.PORT || 8080)
});