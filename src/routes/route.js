const express = require("express");
const router = express.Router();

const { register } = require("../authors/registration");
const { login } = require("../authors/login");
const { createTour, getAllTours, updateTour, deleteTour } = require("../controllers/controller");
const { verifyToken } = require("../middlewares/middleware");

// Public Auth Routes
router.post("/auth/register", register);
router.post("/auth/login", login);

// Protected Tour Routes (Requires JWT Authorization)
router.post("/tours", verifyToken, createTour);
router.get("/tours", verifyToken, getAllTours);
router.put("/tours/:id", verifyToken, updateTour);
router.delete("/tours/:id", verifyToken, deleteTour);

module.exports = router;