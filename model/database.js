const mongoose = require("mongoose");

const host = "mongodb://localhost/";
const db_name = "product-management";

class Database {
    constructor() {
        this._connect();
    }

    async _connect() {
        try {
            await mongoose.connect(host + db_name);
            console.log("Connected to MongoDB:", db_name);
        } catch (error) {
            console.error("MongoDB connection error:", error);
            process.exit(1); // Exit process on connection failure
        }
    }
}

module.exports = new Database();
