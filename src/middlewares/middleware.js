const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_SECRET_KEY";

async function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized! No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next(); // Token সঠিক হলে তবেই Tour API কাজ করবে
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token!", error: error.message });
    }
}

module.exports = { verifyToken };