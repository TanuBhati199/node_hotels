const express=require('express');
const app=express();
const db=require('./db');
const Person=require('./models/person');
const bodyParser=require('body-parser');
app.use(bodyParser.json());  //req.body
app.get('/',(req,res)=>{
    res.send('WELCOME BOSS!');
})

const personRouters=require('./Routes/personRouters'); 
app.use('/person',personRouters);

/*app.post('/person',function(req,res){
    const data=req.body;
    const newPerson=new Person(data);
    newPerson.save((error,savedPerson)=>{
        if(error){
           // res.send('Error!');
           res.status(500).json({error:'internal server error'});
           console.log('error saving person',error);
        }
        else{
            console.log('data saved successfully');
            res.status(200).json(succeess);
        }
    })
    
res.send('data is post successfully');
})
*/   //this is old method for callback after main function execution
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});
