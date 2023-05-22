const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;

const seedSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  weightPerSquareMeter :{
    type: Number,
    required: true
  },
},
{timestamps : true} //This insert Updates information in DB. Can change to false!
);
//Create seeds Collection in Mongo DB.
module.exports = mongoose.model('Seed', seedSchema);