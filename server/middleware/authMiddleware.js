const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Authorization:", authorization);

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = user;

    console.log("User:", user);

    next();
  } catch (error) {
    console.log("Error:", error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = {
  verifyToken,
};
