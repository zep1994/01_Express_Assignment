const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const adminRoutes = require('./routes/admin')
const meetRoutes = require('./routes/meets')



app.use(bodyParser.urlencoded({extended: false}));

// '/admin, GET request
app.use('/admin', adminRoutes)
app.use(meetRoutes)


app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000)