// backend logics

// import db.js file
const db=require('../Services/db')

// get all contacts details from the database
const getAllContacts = ()=>{
    return db.contact.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                contacts:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'sorry,cant find contact!'
            }

        }
    })
}

// add a new contact detail in to database
const addContact=(id,firstname,lastname,city,street,zipcode,phone,email)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'This Contact Already Exists!'
            }
        }
        else{
            const newContact=new db.contact({
                id,
                name:{
                    firstname,
                    lastname
                },
                address:{
                    city,
                    street,
                    zipcode
                },
                phone,
                email})
            newContact.save()
            return{
                statusCode:200,
                message:'Contact added successfully!'
            }

        }

    })
}

const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
         return{
            statusCode:200,
            message:'Contact successfully deleted!'
        }
    })
    .catch((error)=>{
        return{
            statusCode:404,
            message:"Couldn't find the Number"
        }
    })
}

const getAContact=(id)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                contacts:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'sorry,cant find contact!'
            }

        }
    })

}


module.exports={
    getAllContacts,
    addContact,
    deleteContact,
    getAContact
    
}