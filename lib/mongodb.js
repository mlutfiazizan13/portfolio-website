import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

// Cache the connection status
if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const opts = {
    bufferCommands: false, // Disable Mongoose buffering
  };

  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    console.log("Connecting to MongoDB...");
    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected successfully.");
      return mongoose.connection;
    });
  }
  
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default dbConnect;