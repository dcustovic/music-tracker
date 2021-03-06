const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {sequelize} = require('./models')
const config = require('./config/config')
const path = require('path');

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

require('./routes')(app)

app.get(/.*/, function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});
app.use(express.static(path.join(__dirname, 'dist')));

sequelize.sync({force: false}).then(() => {
    app.listen(config.port)
    console.log('info', `Server started on port ${config.port}`)
})


