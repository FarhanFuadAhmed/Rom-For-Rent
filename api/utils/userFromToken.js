const jwt = require('jsonwebtoken');

const userFromToken = (req) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  // setTimeout(() => {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   return decoded;
  // }, 1000);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = userFromToken;
