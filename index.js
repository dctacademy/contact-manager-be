const express = require('express')
const { mongoose } = require('./config/database')
const cors = require('cors')
const morgan = require('morgan')

const router = require('./config/routes')
// const { usersRouter } = require('./app/controllers/UsersController')

const app = express() 
const port = process.env.PORT || 3010 

app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :remote-addr :status :user-agent :date'))
app.use('/api', router)

app.listen(port, function(){
    console.log('listening on port', port)
})