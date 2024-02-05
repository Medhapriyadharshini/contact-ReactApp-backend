// cnnection code f Node and mongodb

// import mongoose
const mongoose = require('mongoose')

// connection string
mongoose.connect('mongodb://localhost:27017/ContactSApp')

// model creation
const contact= mongoose.model('contact',{
    id:String,
    name:{
        firstname:String,
        lastname:String
    },
    address:{
        street:String,
        city:String,
        zipcode:String
    },
    phone:String,
    email:String

})

module.exports={
    contact
}