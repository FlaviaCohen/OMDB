const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Ruta /api/favs')
})

module.exports = router; 
/* 
/favs/: mostrará un listado de las películas favoritas (cuando haya usuarios, puede que la ruta cambie). 
*/