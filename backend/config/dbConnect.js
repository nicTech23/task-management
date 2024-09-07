const mongoose = require('mongoose');

exports.dbConnect = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.log('MongoDB not connected', error.message)
    }
}

