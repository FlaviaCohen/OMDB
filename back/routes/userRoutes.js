const express = require('express');
const router = express.Router();
const passport = require('passport');
const { User } = require('../models');

const checkUser = (req,res,next) => {
    console.log('entré acá')
    if(req.isAuthenticated()){
        console.log('ESTOY ENVIANDO REQ USER', req.user)
        res.json(req.user)
    }
    else{
        console.log('NO ME LLEGA LA DATA')
        res.json({})
    }
   /*  req.isAuthenticated() ? res.json(req.user) : res.json({}) */
}

router.get('/me', checkUser)

router.post('/register', (req,res)=>{
    User.create(req.body)
    .then(user => res.send(user))
    .catch(err => console.log(err))
})

router.post('/login', passport.authenticate('local'), (req,res)=>{
    console.log('POST A /LOGIN Y ENVIA EL USER')
    res.send({user: req.user})
}) 

router.post('/logout', (req,res)=>{
    if(req.isAuthenticated()){
        console.log('REQ LOGOUT')
        req.logout()
    }
    console.log('Usuario deslogueado!')
    res.sendStatus(200)
})

module.exports = router
/* 

/users: mostrará el listado de usuarios.
/users/:userId: mostrará el perfil del usuario. 

*/



