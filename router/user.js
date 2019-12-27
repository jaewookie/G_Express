var express = require('express')
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('user', {name:"Jaewook Kim"});
})

router.get('/about', (req, res)=>{
    res.render('detail', {detail:"live in Incheon"})
})

module.exports=router;