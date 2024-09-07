const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'


mongoose.connect(mongoURL, {
    UseNewUrlParser:true,
    useUnifiedTopology:true

})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected');
});

db.on('error',(err) => {
    console.error('error',err);
});

db.on('disconnected', () => {
    console.log('disconnected');
});

module.exports = db;