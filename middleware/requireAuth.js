const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

    console.log(authorization);
    console.log(authorization.split(""));
    console.log(authorization.split(" ")[0]);
    console.log(authorization.split(" ")[1]);

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET); //first it destructures then takes the _id, verifies a signature with a secret
    console.log(_id);
    console.log(process.env.SECRET)
    req.user = await User.findOne({ _id }).select("_id"); //This line of code finds the user after being verfied with the given ID, after that then saves it as req.user to be used in other handlers.
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;

