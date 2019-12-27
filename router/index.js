var express = require('express')
var router = express.Router()

/* Get -> HomePage Create */

router.get('/', (req, res)=>{
    res.render('index', {title:"hello~!"})
})

module.exports = router;