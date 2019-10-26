const express = require('express')
const path = require('path')

const rootDir = require('../helpers/path')
// //can define a use funtion for all request
const router = express.Router();

router.get('/add-game', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-game.html'))
})

//GET
router.post('/game', (req, res, next) => {
    //redirect and log incoming data
    //by default req.body does not parse the data for you
    console.log(req.body)
    res.redirect('/')
    
})

module.exports = router