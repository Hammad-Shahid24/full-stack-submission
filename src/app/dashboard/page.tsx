"use client";

import React from "react";
import styles from "./Dashboard.module.scss";
import ProjectCard from "@/components/card/Card";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";
import TabsSection from "@/components/tabsSection/TabsSection";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/sideNav/SideNav";

const Dashboard: React.FC = () => {
  const handleFollowUpClick = () => {
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
      <SideNav />
      <div className={styles.mainContent}>
        {/* New parent container for the main sections */}
        <div className={styles.dashboardInnerContent}>
          <WelcomeSection
            name={userData.name}
            summary={userData.summary}
            folder={userData.folder}
          />
          <TabsSection />
          <div className={styles.cardsContainer}>
            {/* Displaying 5 ProjectCard components */}
            {[...Array(5)].map((_, index) => (
              <ProjectCard
                key={index}
                title={
                  index % 2 === 0
                    ? "Make an E-Commerce Website for a Brand Store"
                    : "Website technical maintenance project"
                }
                status="In Progress"
                progress={75}
                nextMilestone="Complete UI Design"
                onFollowUpClick={handleFollowUpClick}
              />
            ))}
          </div>
        </div>
        <Footer /> {/* Keep the footer as is */}
      </div>
    </div>
  );
};

export default Dashboard;
