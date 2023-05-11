const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config()


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('<h2>Welcome to Kanban API Server</h2>')
})




app.listen(port, () => {
    console.log('Server is started at ' + port)
})



