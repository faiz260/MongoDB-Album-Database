const mongoose = require('mongoose')


module.exports = ({ MONGO_URI }) => {
    try {
        mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Not connected")
    }
}
