import { NextApiRequest, NextApiResponse } from "next";
import Note from "@/models/Note";
import { dbConnect } from "@/lib/connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      await dbConnect();
      const note = await Note.findById(id);
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      return res.status(200).json(note);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "An unknown error occurred" });
    }
  } else if (req.method === "PUT") {
    try {
      await dbConnect();
      const { title, content } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      return res.status(200).json(updatedNote);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "An unknown error occurred" });
    }
  } else if (req.method === "DELETE") {
    try {
      await dbConnect();
      const deletedNote = await Note.findByIdAndDelete(id);
      if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      return res.status(204).end();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "An unknown error occurred" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
