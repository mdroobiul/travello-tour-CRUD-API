const { tourModel } = require("../models/model");

// Create Tour (POST)
async function createTour(req, res) {
    try {
        const newTour = await tourModel.create(req.body);
        res.status(201).json({ message: "Tour created successfully", tour: newTour });
    } catch (error) {
        res.status(500).json({ message: "Error creating tour", error: error.message });
    }
}

// Get All Tours (GET)
async function getAllTours(req, res) {
    try {
        const tours = await tourModel.find();
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tours", error: error.message });
    }
}

// Update Tour (PUT)
async function updateTour(req, res) {
    try {
        const { id } = req.params;
        const updatedTour = await tourModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedTour) {
            return res.status(404).json({ message: "Tour not found" });
        }

        res.status(200).json({ message: "Tour updated successfully", tour: updatedTour });
    } catch (error) {
        res.status(500).json({ message: "Error updating tour", error: error.message });
    }
}

// Delete Tour (DELETE)
async function deleteTour(req, res) {
    try {
        const { id } = req.params;
        const deletedTour = await tourModel.findByIdAndDelete(id);

        if (!deletedTour) {
            return res.status(404).json({ message: "Tour not found" });
        }

        res.status(200).json({ message: "Tour deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting tour", error: error.message });
    }
}

module.exports = { createTour, getAllTours, updateTour, deleteTour };