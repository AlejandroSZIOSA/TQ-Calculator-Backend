//next is a function 
exports.getSeeds = (req,res,next) => {
//send a response
// res = response
  res.status(200).json ({
      seeds:[{name: 'First Post',tips:'this is a post seed' }]
  });
};
exports.createSeed = (req,res,next) =>{
  //parse to json for send and request data :)
  const name = req.body.name;
  const tips = req.body.tips;
    //create post in db
    res.status(201).json({
      message: 'Seed Created',
      seed:{ 
        id: new Date().toISOString(),
        name: name,
        tips: tips}
    });

};