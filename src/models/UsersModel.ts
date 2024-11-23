import mongoose, { Schema, Document } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
}

const ModelSchema: Schema<User> = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

export default mongoose.model<User>("Users", ModelSchema);
