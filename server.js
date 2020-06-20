const express = require('express');
const { urlencoded } = require('express');
const app = express();
const {rate, calcfare} = require('./fareUtils')

app.use('/', express.static(__dirname + '/public'))
app.use(express.json())
app.use(urlencoded({extended: true}))

app.post('/calcfare', (req, res)=>{
    let distance = parseInt(req.body.km);
    let time = parseInt(req.body.min);
    let fare = calcfare(distance, time);
    res.send({fare: fare});
})

app.get('/rate', (req, res)=>{
    res.send(rate);
})

exports = module.exports = {app}
