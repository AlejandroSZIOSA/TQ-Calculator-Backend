//next is a function 
exports.getSeeds = (req,res,next) => {
//send a response
// res = response
  res.status(200).json ({
      seeds:[{title: 'First Post',content:'this is a post seed' }]

  })
};