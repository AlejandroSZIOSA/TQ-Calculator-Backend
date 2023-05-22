const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  status:{
    type: String,
    default:'I am a new User'
  }
});
//Create a the Users Collection Data in Mongo DB.
module.exports = mongoose.model('Users', userSchema);