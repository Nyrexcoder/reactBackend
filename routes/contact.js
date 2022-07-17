const express =  require('express')
const mongoose = require('mongoose')

const router = express.Router();
const Contact = mongoose.model('Contact');


router.post('/contact',(req,res)=>{
    console.log(req.body)

    const {name,email,message} = req.body;
    try{
        const contact = new Contact({name,email,message});
        contact.save();
    
        res.send('submit successfully..')
    }catch(err){
        res.status(422).send(err.message)
    }

})


module.exports = router