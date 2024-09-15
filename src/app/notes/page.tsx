"use client";

import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaPlusSquare as AddIcon, FaEdit as EditIcon } from "react-icons/fa";
import { INote } from "@/models/Note"; // Import Note as the default export and INote as the type
import styles from "./NotesPage.module.scss";

export default function NotesPage() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState<INote | null>(null);

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/notes");
        if (!res.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data: INote[] = await res.json();
        setNotes(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  useEffect(() => {
    if (editingNote) {
      // Scroll to the top of the input section when editing a note
      inputRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [editingNote]);

  const handleAddNote = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add note");
      }

      const newNote: INote = await res.json();
      setNotes([...notes, newNote]);
      setTitle("");
      setContent("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateNote = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }
    if (!editingNote) return;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/notes/${editingNote._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update note");
      }

      const updatedNote: INote = await res.json();
      setNotes(
        notes.map((note) => (note._id === updatedNote._id ? updatedNote : note))
      );
      setEditingNote(null);
      setTitle("");
      setContent("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setTitle("");
    setContent("");
  };

  const handleDeleteNote = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/notes/${id}`, { method: "DELETE" });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete note");
      }

      setNotes(notes.filter((note) => note._id !== id));
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.inputArea} ref={inputRef}>
        <Heading mb={4}>
          {editingNote ? "Edit Note" : "Create a New Note"}
        </Heading>
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <VStack spacing={4} align="stretch">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            isDisabled={loading}
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            isDisabled={loading}
          />
          {editingNote ? (
            <VStack spacing={4} align="stretch">
              <Button
                leftIcon={<EditIcon />}
                onClick={handleUpdateNote}
                isLoading={loading}
                colorScheme="blue"
              >
                Update Note
              </Button>
              <Button
                onClick={handleCancelEdit}
                colorScheme="gray"
                variant="outline"
              >
                Cancel Edit
              </Button>
            </VStack>
          ) : (
            <Button
              leftIcon={<AddIcon />}
              onClick={handleAddNote}
              isLoading={loading}
              colorScheme="blue"
            >
              Add Note
            </Button>
          )}
        </VStack>
      </Box>
      <Box className={styles.notesList}>
        <Heading mb={4}>Notes List</Heading>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <VStack spacing={4} align="stretch">
            {notes.map((note) => (
              <Box key={note._id as string} className={styles.noteCard}>
                <Heading fontSize="lg">{note.title}</Heading>
                <p>{note.content}</p>
                <Button
                  colorScheme="teal"
                  mr={2}
                  mt={2}
                  onClick={() => {
                    setEditingNote(note);
                    setTitle(note.title);
                    setContent(note.content);
                  }}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="red"
                  mr={2}
                  mt={2}
                  onClick={() => handleDeleteNote(note._id as string)}
                  isDisabled={editingNote !== null}
                >
                  Delete
                </Button>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
}
