import { Schema, model, models, Document } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string; // Ensure the content property is included
}

const NoteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: [true, "The Note title is required "],
      trim: true,
      maxlength: [40, "title cannot be greater than 40 characters"],
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "content cannot be greater than 200 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Note || model<INote>("Note", NoteSchema);
