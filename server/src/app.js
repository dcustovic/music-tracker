const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined'))
app.use(cors())


app.get('/status', (req, res) => {
    res.send({
        message: "Hello there from the server"
    })
})


app.listen(8081,function() {});