const mongoose = require('mongoose');
//Schema ?
const Schema = mongoose.Schema;

const seedSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weightPerSquareMeter :{
    type: Number,
    required: true
  },
  creator:{
    type: String,
    required: true
  }
}, //add data when is object updated ?
{timestamps : true} //fix problem!
);
//define the name of a Seed Collection in Mongo DB database
module.exports = mongoose.model('Seed', seedSchema);