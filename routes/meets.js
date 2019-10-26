const express = require('express')

// //can define a use funtion for all request
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>Hello Tom</h1>")
})

module.exports = router