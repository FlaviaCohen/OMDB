/* https://www.omdbapi.com/?apikey=20dac387& ...*/
const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes');
const coockieParser = require('cookie-parser');
const session = require('express-session'); // req.session
const passport = require('passport');
const volleyball = require('volleyball');
const { User, Fav } = require('./models');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

app.use(volleyball);

app.use(express.json()); // bodyParser config
app.use(express.urlencoded({ extended: false })); // bodyParser config

app.use(coockieParser());

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'omdb' })); // si o si antes de las rutas

app.use(passport.initialize()); // si o si antes de las rutas
app.use(passport.session()); // si o si antes de las rutas

passport.use(
    new LocalStrategy(
        {usernameField: 'email', passwordField: 'password'}, // video 10 review
        (email, password, done) => {
            User.findOne({
                where: {
                    email,
                }
            })
            .then((user)=>{
                if(!user){
                    return done(null, false, { message: 'Incorrect Email'})
                }
                if(!user.validPassword(password)){
                    return done(null, false, { message: 'Incorrect Password'})
                }
                return done(null, user)
            })
            .catch(done)
        }
    )
)

passport.serializeUser((user, done)=>{
    console.log('SEREALIZANDO')
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    console.log('DESEREALIZANDO')
    User.findByPk(id)
    .then(user => done(null, user))
})

app.use('/api', routes)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})

app.use((err, req, res, next)=>{
    console.error;
    res.status(500).send(err)
})

db.sync({force:false})
.then(()=>
app.listen(3000, ()=> console.log('Listening on port 3000')))
.catch(console.error)

