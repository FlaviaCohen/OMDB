const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Ruta /api/users')
})

module.exports = router
/* 

/users: mostrará el listado de usuarios.
/users/:userId: mostrará el perfil del usuario. 

*/



