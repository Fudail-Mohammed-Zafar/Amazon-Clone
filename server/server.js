import express from "express";
import "dotenv/config";
import cors from "cors";
import connectMongoDb from "./configs/mongoDb.js";
import { connectGemini } from "./configs/gemini.js";
import { connectImageKit } from "./configs/imageKit.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// Test all connections
await connectMongoDb();
await connectGemini();
connectImageKit();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sever is running on PORT: ${PORT}`);
});

export default app;
