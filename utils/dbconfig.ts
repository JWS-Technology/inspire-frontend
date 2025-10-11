import mongoose from "mongoose";

interface connectionStateInterface {
  isConnected?: boolean;
}

const connectionStates: connectionStateInterface = {};

export async function connect() {
  if (connectionStates.isConnected) {
    return;
  }
  try {
      const URI: undefined | string = process.env.MONGODB_URI;
    if (!URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    const db = await mongoose.connect(URI);
    connectionStates.isConnected = db.connection.readyState === 1;
  } catch (error) {
    console.log("Error in database connection\n", error);
    console.log("exiting process in db");
    process.exit(1);
  }
}