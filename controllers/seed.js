//validating The Admin
const {validationResult} = require('express-validator'); 
 
const Seed = require('../models/seed')

//next is a function
exports.getSeeds = (req,res,next) => {
  Seed.find()
    .then(seeds =>{
      res.status(200).json({
        message:'Fetched seeds successfully',seeds:seeds
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
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
  //const creator = req.body.creator;
    //create post in db
    const seed = new Seed({
      name: name,
      weightPerSquareMeter: weightPerSquareMeter,
      //creator:creator, // todo: refactor!
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
        //if there is an error, send it back
        if(err.statusCode){
          err.status = 500;
        }
        next(err); // goes to the next function error
      })
};