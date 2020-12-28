const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const CONNECTION_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/contact-manager-be` 

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('error connecting to db')
    })

module.exports = {
    mongoose 
}