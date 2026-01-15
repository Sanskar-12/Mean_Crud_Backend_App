import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db connected at host: ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
