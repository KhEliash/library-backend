import express, { Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";

export const borrowRoutes = express.Router();

borrowRoutes.post("/borrow/:id", async (req: Request, res: Response) => {
  const { id: bookId } = req.params;
  const { quantity, dueDate } = req.body;
  const book = await Book.findById(bookId);
  if (!book || book.copies == null || book.copies < quantity) {
    return res.status(400).json({ message: "Not enough copies available" });
  }

  book.copies -= quantity;
  book.available = book.copies > 0;
  await book.save();

  const borrow = await Borrow.create({ book: bookId, quantity, dueDate });
  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: borrow,
  });
});
// Borrowed Books Summary  
borrowRoutes.get("/summary", async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      { $unwind: "$bookDetails" },
      {
        $project: {
          _id: 0,
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch summary", error });
  }
});
