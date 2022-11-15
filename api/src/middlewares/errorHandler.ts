import { Request, Response } from "express";
import { AppError } from "./AppError";

const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error("Something went wrong!");
  console.log("Path:", req.path);
  console.log("Error:", err);

  if (err instanceof AppError) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send("Something went wrong with our server :(");
  }
};

export default errorHandler;
