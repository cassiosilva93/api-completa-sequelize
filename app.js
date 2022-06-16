const express = require('express')
const usersRouter = require('./router/usersRouter')

const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', usersRouter)

app.listen(port, () => console.log(`O servidor está sendo executado na porta ${port}`))