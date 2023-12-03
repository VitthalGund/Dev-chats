import mongoose from "mongoose";
import { userSchemaType } from "./types/userSchmeType";

declare global {
  interface Request {
    user?: userSchemaType & { _id: mongoose.ObjectId };
  }
}
