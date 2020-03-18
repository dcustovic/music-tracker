const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// send jwt token when the user signs in
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

//register endpoint
module.exports = {
   async register (req, res) {
     try {
         const user = await User.create(req.body)
         res.send(user.toJSON())
     } catch (err) {
        res.status(400).send({
            error: 'This email account already exists'
        })
     }
    },
    async login (req, res) {
     try {
         const { email, password } = req.body
         const user = await User.findOne({
             where: {
                 email: email
             }
         })
         if (!user) {
             return res.status(403).send({
                 error: 'Login information is incorrect'
             })
         }

         const isPasswordCorrect = password === user.password
         if (!isPasswordCorrect) {
            return res.status(403).send({
                error: 'Login information is incorrect'
            })
         }

         const userJSON = user.toJSON()
         res.send({
             user: userJSON,
             token: jwtSignUser(userJSON) // pass token to user
         })
     } catch (err) {
        res.status(500).send({
            error: 'An error has occured. Please try again later'
        })
     }
    }
}