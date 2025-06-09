import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
dotenv.config();

let app = express();
let port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    connectDb();
    console.log("Server starts");
})