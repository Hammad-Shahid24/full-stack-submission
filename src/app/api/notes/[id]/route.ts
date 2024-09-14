import Note from "@/models/Note";
import { dbConnect } from "@/lib/connection";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const noteFound = await Note.findById(params.id);

    if (!noteFound) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(noteFound);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  await dbConnect();

  try {
    const noteUpdated = await Note.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!noteUpdated) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(noteUpdated);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const noteDeleted = await Note.findByIdAndDelete(params.id);

    if (!noteDeleted) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(noteDeleted);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
