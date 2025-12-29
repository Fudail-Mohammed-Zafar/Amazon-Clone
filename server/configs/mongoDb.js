import mongoose from "mongoose";

// Test MongoDB Connection
const connectMongoDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("MongoDB is connected.")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/stockhub`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectMongoDb;
