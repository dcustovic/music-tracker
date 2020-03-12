const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())


app.post('/register', (req, res) => {
    res.send({
        message: `Greetings ${req.body.email} from express.js`
    })
})


app.listen(8081,function() {});