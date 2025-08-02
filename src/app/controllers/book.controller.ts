import express, { Request, Response } from "express";
import { Book } from "../models/book.model";

export const booksRoutes = express.Router();

// book create
booksRoutes.post("/book", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      // MongoDB duplicate key error
      res.status(400).json({ error: "A book with this title already exists" });
    } else {
      res.status(500).json({
        success: true,
        message: "Failed to create book",
        error,
      });
    }
  }
});
// get all books
booksRoutes.get("/book", async (req: Request, res: Response) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books found successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to find the book",
      error,
    });
  }
});
// get single book
booksRoutes.get("/book/:id", async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json({
      success: true,
      message: "Book find successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to find the book",
      error,
    });
  }
});
// update book
booksRoutes.put("/book/:id", async (req: Request, res: Response) => {
  try {
    const updateData = {
      ...req.body,
      available: req.body.copies > 0,
    };

    const book = await Book.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update the book",
      error,
    });
  }
});

// delete book
booksRoutes.delete("/book/:id", async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Failed to delete the book",
      error,
    });
  }
});
