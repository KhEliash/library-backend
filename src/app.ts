import express, { Application, Request, Response } from "express";
import { booksRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// books routes
app.use("/", booksRoutes);
// // borrow routes
app.use("/", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the app");
});
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
