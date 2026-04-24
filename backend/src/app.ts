import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth";
import { creatorProductRouter } from "./routes/creatorProduct";
import { creatorImportRouter } from "./routes/creatorImport";
import { publicProductsRouter } from "./routes/publicProducts";
import { checkoutRouter } from "./routes/checkout";
import { creatorSalesRouter } from "./routes/creatorSales";
import { libraryRouter } from "./routes/library";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_ORIGIN,
      credentials: true,
    })
  );

  app.use(express.json({}));
  app.use(cookieParser());

  // all the routes placeholder
  app.use("/api/auth", authRouter);
  app.use("/api/creator/products", creatorProductRouter);
  app.use("/api/creator/products", creatorImportRouter);
  app.use("/api/creator/sales", creatorSalesRouter);
  app.use("/api/products", publicProductsRouter);
  app.use("/api/checkout", checkoutRouter);
  app.use("/api/library", libraryRouter);

  return app;
}
