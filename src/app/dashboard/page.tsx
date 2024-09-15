"use client";

import { Box, Button } from "@chakra-ui/react";
import styles from "./Dashboard.module.scss";
import ProjectCard from "@/components/card/Card"; // Adjust the path if necessary

const Dashboard: React.FC = () => {
  const handleFollowUpClick = () => {
    // Handle follow-up action
    console.log("Follow-up action triggered");
  };

  return (
    <Box className={styles.dashboard}>
      <Box className={styles.header}>
        <Box className={styles.title}>Dashboard</Box>
        <Button className={styles.addButton}>Add New</Button>
      </Box>
      <Box className={styles.cardsContainer}>
        <ProjectCard
          title="Make an E-Commerce Website for a Brand Store"
          status="In Progress"
          progress={75}
          nextMilestone="Complete UI Design"
          onFollowUpClick={handleFollowUpClick}
        />
        {/* Add more ProjectCard components here */}
      </Box>
    </Box>
  );
};

export default Dashboard;
