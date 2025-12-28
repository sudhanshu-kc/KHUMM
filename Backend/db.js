import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.set("bufferCommands", false); // 🔥 MOST IMPORTANT

    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "khumm",
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Atlas connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
