const { authorModel } = require("./author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_SECRET_KEY";

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }

        const user = await authorModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "4h" });

        res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
        res.status(500).json({ message: "Login failed!", error: error.message });
    }
}

module.exports = { login };