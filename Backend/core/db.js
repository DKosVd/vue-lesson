import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/avia')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))

export {db, mongoose};