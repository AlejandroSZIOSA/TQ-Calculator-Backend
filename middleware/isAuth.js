const jwt = require('jsonwebtoken')

//Authorization
module.exports = (req,res,next) => {
  const token = req.get('Authorization').split('')[1];
  let decodedToken;
  try{
    decodedToken = jwt.verify(token,'secret');
  } catch(err){
    err.statusCode = 500
    throw err;
  }
  //undefine corporate
  if (!decodedToken) {
    const error = new Error('Not authenticated')
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};