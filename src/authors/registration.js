const { authorModel } = require("./author");
const bcrypt = require("bcrypt");

async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const existingUser = await authorModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAuthor = await authorModel.create({
            name,
            email,
            password: hashedPassword
        });

        const userResponse = newAuthor.toObject();
        delete userResponse.password;

        res.status(201).json({ message: "Author registered successfully!", author: userResponse });
    } catch (error) {console.log(error)

        res.status(500).json({ message: "Registration failed!", error: error.message });
    }
}

module.exports = { register };