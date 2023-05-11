const jwt = require('jsonwebtoken')
const User = require('../models/user')
const dotenv = require('dotenv')

dotenv.config()

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send('error: You Are not authenticated. Please Try to Login!')
    }
}

module.exports = auth