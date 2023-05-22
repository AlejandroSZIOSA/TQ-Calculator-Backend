//Validating The Admin
const {validationResult} = require('express-validator'); 

const Seed = require('../models/seed')

//Next is a function
exports.getSeeds = (req,res,next) => {
  Seed.find() //Find all seeds stored in DB
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

//Validation when create seeds (document)
exports.createSeed = (req,res,next) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(422).json({
      message:'Validation Failed, Seed Name, max length 15',
      errors: errors.array()
    })
  }
  //Parse to json for send and request data :)
  const id = req.body.id;
  const name = req.body.name;
  const weightPerSquareMeter= req.body.weightPerSquareMeter;
    //Create post in db
    const seed = new Seed({
      id: id,
      name: name,
      weightPerSquareMeter: weightPerSquareMeter,
    });
    //Save the data in DB
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
        //If there is an error, send it back
        if(err.statusCode){
          err.status = 500;
        }
        next(err); //Goes to the next function error
      })
};