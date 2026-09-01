const jwt = require("jsonwebtoken");

async function getLoggedinUser(token){
    console.log(token);
    
    const decoded = jwt.verify(token.split(" ")[1], "YOUR_SECRET_KEY");
    console.log("Decoded Token:", decoded);
    const userId = decoded.userId;
    
    const user = await userModel.findById(userId);
    return user;
}

async function checkLogingStatus(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({message: "Unauthorized"})
    }
    next();
}

module.exports = { checkLogingStatus }