const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true }
    },
    { versionKey: false, timestamps: true }
);

const authorModel = mongoose.model("Author", authorSchema);
module.exports = { authorModel };