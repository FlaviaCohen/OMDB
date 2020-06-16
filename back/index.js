/* https://www.omdbapi.com/?apikey=20dac387& ...*/

const express = require('express');
const app = express();
const db = require('./config/db');
const User = require('./models/User');
const Favs = require('./models/Favs');

const routes = require('./routes')

app.use(express.static(__dirname + '/public'))

app.use('/api', routes)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})

db.sync({force:false})
.then(()=>
app.listen(3000, ()=> console.log('Listening on port 3000')))
.catch(console.error)

// COOKIE PARSER 
/* var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser()) 

const path = require('path'); */