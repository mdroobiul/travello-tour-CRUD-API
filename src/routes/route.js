const express = require("express");
const router = express.Router();

const { register } = require("../authors/registration");
const { login } = require("../authors/login");
const { createTour, getAllTours, updateTour, deleteTour } = require("../controllers/controller");
const { checkLogingStatus } = require("../middlewares/middleware");

// Public Auth Routes
router.post("/auth/register", register);
router.post("/auth/login", login);

// Protected Tour Routes (Requires JWT Authorization)
router.post("/tours", checkLogingStatus, createTour);
router.get("/tours", checkLogingStatus, getAllTours);
router.put("/tours/:id", checkLogingStatus, updateTour);
router.delete("/tours/:id", checkLogingStatus, deleteTour);

module.exports = router;