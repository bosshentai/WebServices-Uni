import mongoose from "mongoose";
import { config } from "dotenv";

config()


export const connectionDataBase = () => {
  console.log('Wait connecting to the Database')

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo Atlas Connected'))
    .catch((error) => console.log(error))
}


