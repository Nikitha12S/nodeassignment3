const mongoose=require('mongoose')
const router = require('../routers/aliens')


const alienSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
tech:{
    type:String,
    required:true
},
sub:{
    type:Boolean,
    required:true,
    default:false


}

})


module.exports=mongoose.model('Alien',alienSchema)