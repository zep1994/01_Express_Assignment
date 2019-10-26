const express = require('express')
// //can define a use funtion for all request
const router = express.Router();

router.get('/add-game', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input<button type='submit'>Submit</button></form>")
})

//GET
router.post('/product', (req, res, next) => {
    //redirect and log incoming data
    //by default req.body does not parse the data for you
    console.log(req.body)
    res.redirect('/')
    
})

module.exports = router