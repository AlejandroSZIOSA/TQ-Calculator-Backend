//validating The Admin
const {validationResult} = require('express-validator') 
//next is a function 
const Seed = require('../models/seed')
exports.getSeeds = (req,res,next) => {
//send a response
// res = response
  res.status(200).json ({
      seeds:[
        { 
          _id :'1',
          name: 'First Seed',
          weightPerSquareMeter:3,
          // creator:{
          //   admin:'Gato'
          // },
          creator:'Gato',
          createdAt: new Date()
        }
    ]
  });
};
exports.createSeed = (req,res,next) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(422).json({
      message:'Validation Failed, Data incorrect',
      errors: errors.array()
    })
  }

  //parse to json for send and request data :)
  const name = req.body.name;
  const weightPerSquareMeter= req.body.weightPerSquareMeter;
  const creator = req.body.creator;
    //create post in db
    const seed = new Seed({
      name: name,
      weightPerSquareMeter: weightPerSquareMeter,
      creator:creator, // todo: refactor!
    });
    //save the data in DB
    seed
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: 'Seed Created',
          seed:result
        });
      })
      .catch(err => {
        console.log(err);
      })
};