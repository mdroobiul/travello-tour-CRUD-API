const { default: mongoose } = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI

async function connectToDatabase() {
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("Connecting to MongoDB")
    } catch(error) {
        console.log("Error connecting to MongoDB", error)
    }
}

module.exports = connectToDatabase