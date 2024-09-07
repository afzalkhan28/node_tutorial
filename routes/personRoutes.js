const express = require('express');
const router = express.Router();

router.post('/', async(req, res) =>{
    try{
        const data = req.body

         const newPerson = new Person(data);

         const response = await newPerson.save();

         console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Error'})
    }
})

router.get('/', async(req,res)=>{
    try{
         const data = await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
    
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }

})

module.exports = router;