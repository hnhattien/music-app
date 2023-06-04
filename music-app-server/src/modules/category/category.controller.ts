import prismaClient from "@core/database/prismaClient";
import { NextFunction, Request, Response } from "express";

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prismaClient.category.findMany({});
    res.send(categories);
  } catch (err) {
    res.send({
      error: {
        message: String(err),
      },
    });
  }
};

export default {
  getCategories,
};
