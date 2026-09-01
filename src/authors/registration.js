const { authorModel } = require("./author");
const bcrypt = require("bcrypt");

async function register(req, res) {
    let info = req.body;
    info.password = bcrypt.hashSync(info.password, 10);
    try{
        const newUser = await authorModel.create(info)
        res.status(200).json({ message: "User registered successfully!", user:newUser})
    }catch(error){
        res.status(500).json({message: "Error registering user!"})
    }
};


module.exports = { register };