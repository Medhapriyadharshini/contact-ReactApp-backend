// import express
const express = require('express')

// import cors
const cors= require('cors')

// import logics
const logic = require('./Services/logics')

// create a backend application using express
const contactApp= express()

// connecting using cors
contactApp.use(cors({
    origin:'http://localhost:3000'  //frontend path
}))

// convert json data to js and js to json using json()
contactApp.use(express.json())

// port number
contactApp.listen(8000,()=>{
    console.log("Contact app listening on port 8000");
})

// Api call for get all contact details
contactApp.get('/get-all-contacts',(req,res)=>{
    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })

})

contactApp.post('/add-a-contact',(req,res)=>{
    logic.addContact(
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.city,
        req.body.street,
        req.body.zipcode,
        req.body.phone,
        req.body.email
        )
    .then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

contactApp.delete('/delete-a-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})


// Api call for get a contact details
contactApp.get('/get-a-contact/:id',(req,res)=>{
    logic.getAContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})
