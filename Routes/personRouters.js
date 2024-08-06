const express=require('express');
const router=express.Router();
const Person=require('./../models/person');
router.get('/',async(req,res)=>{
    // res.send('welcome Boss!');
 try{
         const data=await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
 }
 catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error'});
 }
 });
 router.get('/:workType',async(req,res)=>{
     try{
         const workType=req.params.workType;
        if(workType=='chef'|| workType=='manager'||workType=='waiter'){
         const response=await Person.find({work:workType});
         console.log('response fetched');
         res.status(200).json(response);
     } 
 else{
     res.status(404).json({error:'invalid work type'});
 }}
     catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
       
     }
 })
 
 
router.post('/',async(req,res)=>{
     try{
         const data=req.body;
         const newPerson=new Person(data);
         const response=await newPerson.save();
         console.log('data saved');
         res.status(200).json(response);
 
     }
     catch(err){
         console.log(err);
         res.status(500).json({ error: 'internal server error' });
     }
     
 });
 router.put('/:id',async(req,res)=>{
    try{
     const personId=req.params.id;
     const updatedPersonData=req.body;
     const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true

     })
     if(!response){
        return res.status(404).json({error:'Internal server error'});
     }
     console.log('data updates');
     res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json(response);
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
   
        if(!response){
          return res.status(404).json({error:'Internal server error'});
        }
        console.log('data deleted successfully');
        res.status(200).json({message:'person deleted successfully'});
       }
       catch(err){
           console.log(err);
           res.status(500).json({error:'Internal Server Error'});
       }

});
 module.exports=router;
 