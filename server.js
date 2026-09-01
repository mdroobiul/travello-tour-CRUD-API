require("dotenv").config();
const app = require("./app");
const connectToDatabase = require("./src/config/db");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT

connectDB();

app.listen(PORT, ()=>{
    connectToDatabase
    console.log(`Server running on port ${PORT}`)
})