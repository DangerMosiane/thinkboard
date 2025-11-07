import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById,
} from "../controllers/notesControllers.js";

const router = express.Router();

// What is an Endpoint(Route)?
// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
