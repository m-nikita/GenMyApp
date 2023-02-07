const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_KEY);
    const user = await decodedToken;
    req.user = user;
    next();
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};