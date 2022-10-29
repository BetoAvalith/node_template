import mongoose from "mongoose";

export const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if( err ) return console.log('Database connection error');
        console.log('Successful connection to database')
    });
};

