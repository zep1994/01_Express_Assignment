const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const meetRoutes = require('./routes/meets')



app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRoutes)
app.use(meetRoutes)


app.use((req, res) => {
    res.send('<h1>404</h1>')
})


app.listen(3000)