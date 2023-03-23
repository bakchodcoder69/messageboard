const express = require('express')
const router =  express.Router()

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

router.get('/',(req,res)=>{
    res.render('messages', 
    {   
        title: "Mini Messageboard", 
        messages: messages 
    })
})

router.get('/new',(req,res)=>{
    res.render("messageNewForm")
})

router.post('/',(req,res)=>{
    messages.push(
        {   
            text: req.body.addedText, 
            user: req.body.addedUser, 
            added: new Date()
        });
    
    res.redirect("/")
})

module.exports = router