import { Schema, model, Types } from "mongoose";

const borrowSchema = new Schema(
  {
    book: { type: Types.ObjectId, ref: "Book" },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: Date,
  },
  { timestamps: true, versionKey: false }
);

export const Borrow = model("Borrow", borrowSchema);
