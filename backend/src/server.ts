// import "dotenv/config";

// import { createApp } from "./app";
// import { connectMongo } from "./db";

// async function main() {
//   await connectMongo();
//   const app = createApp();

//   app.listen(process.env.PORT, () => {
//     console.log("api is now running");
//   });
// }

// main().catch((err) => {
//   console.error("boot failed", err);
//   process.exit(1);
// });
import "dotenv/config";

import { createApp } from "./app";
import { connectMongo } from "./db";

async function main() {
  await connectMongo();
  const app = createApp();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log("✅ API is now running on", PORT);
  });
}

main().catch((err) => {
  console.error("❌ boot failed", err);
  process.exit(1);
});