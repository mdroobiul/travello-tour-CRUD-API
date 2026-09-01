const { authorModel } = require("./author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_SECRET_KEY";

async function login(req, res){
    let info = req.body
    try{
        const user = await authorModel.findOne({email: info.email});
        if(!user) { return res.status(401).json({message: "Invaild email & password!"});}

        const isMatch = await bcrypt.compare(info.password, user.password);

        if(!isMatch) {return res.status(401).json({message: "Invaild email & password"})};

        const token = jwt.sign({ userId: user._id }, "YOUR_SECRET_KEY", { expiresIn: "4h"})
        console.log(token);
        res.status(200).json({ message: "Login successfully!", token});

    } catch(error){
        console.log(error);
        res.status(500).json({message: "Error logging in!"})
    }
};
module.exports = { login };