const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        required : true,
        type : String
    },
    age:{
        type : Number
        //required : true,
    },
    address:{
        type : String,
        required : true
    },
    work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }

});
const Person=mongoose.model('Person',personSchema);
module.exports= Person;