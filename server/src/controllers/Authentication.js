//register endpoint
module.exports = {
    register (req, res) {
        res.send({
            message: `Greetings ${req.body.email} from express.js`
        })
    }
}