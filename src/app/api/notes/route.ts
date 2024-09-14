import Note from "@/models/Note";
import { dbConnect } from "@/lib/connection";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find();
    return NextResponse.json(notes);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const newNote = new Note(body);
    const savedNote = await newNote.save();
    return NextResponse.json(savedNote);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }
}
