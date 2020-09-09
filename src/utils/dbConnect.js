import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected) {
        return;
    }

    const db = mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        connection.isConnected = db.connections[0].readyState;
        return console.log('MongoDB connected')
    })
    .catch(console.log);

    
}

export default dbConnect;