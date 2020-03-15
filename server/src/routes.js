const Authentication = require('./controllers/Authentication')

// routes hit endpoints
module.exports = (app) => {
    app.post('/register', Authentication.register)
}