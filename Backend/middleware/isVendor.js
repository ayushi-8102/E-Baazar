const jwt = require("../utils/jwt");
const createError = require("http-errors");

const isVendor = async (req, res, next) => {
  if (req.headers.authorization == undefined) {
    console.log("No token found");
    return next(createError(401, "No token found"));
  }
  const token = req.headers?.authorization.split(" ")[1];
  if (!token) {
  }

  await jwt
    .verifyAccessToken(token)
    .then((user) => {
      if(user.payload.type !== "vendor"){
        return next(createError.Unauthorized("Access token is required"));
      }
      req.user = user;
      next();
    })
    .catch((e) => {
      res.status(401).json({ message: "Invalid Token" });
    });
};

module.exports = isVendor;