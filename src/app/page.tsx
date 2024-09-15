"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HomePage.module.scss"; // Import your SCSS module

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  // Render null until the component is mounted on the client to avoid hydration errors
  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Link href="/notes" passHref>
        <div
          className={`${styles.box} ${
            hoveredSection === "notes" ? styles.notesHover : ""
          } ${styles.notes}`}
          onMouseEnter={() => handleMouseEnter("notes")}
          onMouseLeave={handleMouseLeave}
        >
          <h1>Notes CRUD</h1>
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div
          className={`${styles.box} ${
            hoveredSection === "figma" ? styles.figmaHover : ""
          } ${styles.figma}`}
          onMouseEnter={() => handleMouseEnter("figma")}
          onMouseLeave={handleMouseLeave}
        >
          <h1>Figma Dashboard</h1>
        </div>
      </Link>
    </div>
  );
}
