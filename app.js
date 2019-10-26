const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const meetRoutes = require('./routes/meets')



app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRoutes)
app.use(meetRoutes)





app.listen(3000)