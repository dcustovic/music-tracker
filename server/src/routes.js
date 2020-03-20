const Authentication = require('./controllers/Authentication')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const SongsController = require('./controllers/SongsController')

// routes hit endpoints
module.exports = (app) => {
    app.post('/register',
    AuthenticationPolicy.register,
    Authentication.register)

    app.post('/login',
    Authentication.login)

    app.get('/songs',
    SongsController.getSongs)

    app.get('/songs/:songId',
    SongsController.show)

    app.post('/songs',
    SongsController.post)
}