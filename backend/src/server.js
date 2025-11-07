import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body


app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}.`);
});
