import "dotenv/config";

import { createApp } from "./app";
import { connectMongo } from "./db";

async function main() {
  await connectMongo();
  const app = createApp();

  app.listen(process.env.PORT, () => {
    console.log("api is now running");
  });
}

main().catch((err) => {
  console.error("boot failed", err);
  process.exit(1);
});
try {
  console.log("🚀 Starting server...");

  // your existing imports + code

} catch (err) {
  console.error("🔥 CRASH ERROR:", err);
}

console.log("STEP 1");

import express from "express";
console.log("STEP 2");

import app from "./app";
console.log("STEP 3");

import mongoose from "mongoose";
console.log("STEP 4");