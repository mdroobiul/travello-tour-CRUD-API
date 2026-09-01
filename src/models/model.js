const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        location: { type: String, required: true, trim: true },
        price: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, trim: true }
    },
    { versionKey: false, timestamps: true }
);

const tourModel = mongoose.model("Tour", tourSchema);
module.exports = { tourModel };