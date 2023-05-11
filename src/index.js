const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')
const dotenv = require('dotenv')

dotenv.config()


const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('<h2>Welcome to Kanban API Server</h2>')
})




app.listen(port, () => {
    console.log('Server is started at ' + port)
})



