const express = require('express')
const app = express()
//const routes = require('./routes/routes')

app.use('/add-game', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'/><button='submit'>Submit</submit></form>")
})

app.use('/product', (req, res, next) => {
    //redirect and log incoming data
    res.redirect('/')
    console.log(req.body)
})

app.use('/', (req, res, next) => {
    res.send("<h1>Hello Tom</h1>")
})



app.listen(3000)