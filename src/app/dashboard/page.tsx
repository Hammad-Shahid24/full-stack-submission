"use client";

import React from "react";
import styles from "./Dashboard.module.scss";
import ProjectCard from "@/components/card/Card";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";
import TabsSection from "@/components/tabsSection/TabsSection";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/sideNav/SideNav"; // Import the SideNav component

const Dashboard: React.FC = () => {
  const handleFollowUpClick = () => {
    // Handle follow-up action
    console.log("Follow-up action triggered");
  };

  const userData = {
    name: "Haseena",
    summary: "You have accomplished a lot today. Let us handle the rest.",
    folder: {
      completed: 30,
      ongoing: 2,
      drafts: 4,
      cancelled: 2,
    },
  };

  return (
    <div className={styles.dashboardContainer}>
      <SideNav /> {/* Render the SideNav component */}
      <div className={styles.mainContent}>
        <WelcomeSection
          name={userData.name}
          summary={userData.summary}
          folder={userData.folder}
        />
        <TabsSection />
        <div className={styles.cardsContainer}>
          <ProjectCard
            title="Make an E-Commerce Website for a Brand Store"
            status="In Progress"
            progress={75}
            nextMilestone="Complete UI Design"
            onFollowUpClick={handleFollowUpClick}
          />
          {/* Add more ProjectCard components here */}
        </div>
        <Footer /> {/* Render the Footer component */}
      </div>
    </div>
  );
};

export default Dashboard;
