const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')


// //can define a use funtion for all request
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'meet.html')) 
})

module.exports = router