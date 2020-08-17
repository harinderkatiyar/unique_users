const mongoose = require('mongoose');

const  user = new mongoose.Schema({
  ipAddress:{
    required:true,
    type: String  
  },
  email:{
    type: String 
  },
  name:{
    type: String 
  }
})
module.exports = mongoose.model('user',user)