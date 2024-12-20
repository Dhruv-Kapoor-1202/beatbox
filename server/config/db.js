import mongoose from mongoose;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.27017/beatboxApp");
    console.log(`MongoDB connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Server Issue ${error}`);
  }
};

export default connectDB;