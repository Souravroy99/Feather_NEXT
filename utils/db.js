import mongoose from "mongoose"

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB successfully connected`);
    } 
    catch (error) {
        console.log(`MongoDB connection error: ${error}`);
        process.exit(1)    
    }
}

export default connectDB