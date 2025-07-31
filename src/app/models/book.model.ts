import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, trim: true, unique: true },
    author: String,
    genre: String,
    isbn: String,
    description: String,
    copies: Number,
    available: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

export const Book = model("Book", bookSchema);
