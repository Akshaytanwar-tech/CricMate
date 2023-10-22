require("dotenv").config();
const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) =>{
    const token = req.header('token');
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.user.id)
    next()
}

module.exports = fetchuser;