/*const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotel';

mongoose.connect(mongoURL);
const db=mongoose.connection; //connnection establishment
//define event listeners for database connection 
db.on('connected',() => {
    console.log('MongoDB connected!');
  });
db.on('error',(err)=>{
  console.error('mongoDB connection error',err);
});  
db.on('disconnected',()=>{
  console.log('mongoDB disconnected');
});
module.exports=db;*/  
const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error', err));

const db = mongoose.connection; // Connection establishment
db.on('error', (err) => {
    console.error('MongoDB connection error', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db; // Exporting mongoose for use in other parts of the application
