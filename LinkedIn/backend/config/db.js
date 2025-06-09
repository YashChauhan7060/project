import mongoose from "mongoose";

const connectDb = async ()=> {
    try{
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch{
        console.error("db error");
    }
}
export default connectDb;