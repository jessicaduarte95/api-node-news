import mongoose, { Schema, Types } from "mongoose";

interface User {
  userId: Types.ObjectId;
  post: string;
  createDate: Date;
  updateDate: Date
}

const ModelSchema: Schema<User> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  post: {
    type: Schema.Types.String,
    required: true,
  }
}, 
  { timestamps: { createdAt: "createDate", updatedAt: "updateDate" } }
);

export default mongoose.model<User>("Posts", ModelSchema);
