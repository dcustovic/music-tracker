const {User} = require('../models')

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
             user: userJSON
         })
     } catch (err) {
        res.status(500).send({
            error: 'An error has occured. Please try again later'
        })
     }
    }
}