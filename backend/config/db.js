const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('MongoDB Connection Successful')
    }).catch((err) => {
        console.log("An Error happened during connecting with MongoDB: " + err.message);
    })
}

module.exports = connectDB;