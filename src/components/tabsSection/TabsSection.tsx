import React from "react";
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";
import styles from "./TabsSection.module.scss";
import PlusCircleIcon from "../../../public/images/plus-circle.svg";
import Image from "next/image";

const TabsSection: React.FC = () => {
  return (
    <div className={styles.tabSectionContainer}>
      <Tabs className={styles.tabs}>
        <TabList>
          <Tab
            fontSize="1rem"
            fontWeight="400"
            _hover={{ backgroundColor: "#f8f8f8" }} // Hover for inactive tab
            _selected={{
              color: "#5876B7", // Corrected font color for selected tab
              fontWeight: "500", // Bold font weight for active tab

              _hover: { backgroundColor: "#d0d8e0" }, // Different hover for active tab
            }}
          >
            Ongoing
          </Tab>
          <Tab
            fontSize="1rem"
            fontWeight="400"
            _hover={{ backgroundColor: "#f8f8f8" }} // Hover for inactive tab
            _selected={{
              color: "#5876B7", // Corrected font color for selected tab
              fontWeight: "500", // Bold font weight for active tab

              _hover: { backgroundColor: "#d0d8e0" }, // Different hover for active tab
            }}
          >
            Completed
          </Tab>
          <Tab
            fontSize="1rem"
            fontWeight="400"
            _hover={{ backgroundColor: "#f8f8f8" }} // Hover for inactive tab
            _selected={{
              color: "#5876B7", // Corrected font color for selected tab
              fontWeight: "500", // Bold font weight for active tab

              _hover: { backgroundColor: "#d0d8e0" }, // Different hover for active tab
            }}
          >
            Cancelled
          </Tab>
          <Tab
            fontSize="1rem"
            _hover={{ backgroundColor: "#f8f8f8" }} // Hover for inactive tab
            _selected={{
              color: "#5876B7", // Corrected font color for selected tab
              fontWeight: "500", // Bold font weight for active tab
              _hover: { backgroundColor: "#d0d8e0" }, // Different hover for active tab
            }}
          >
            Drafts
          </Tab>
        </TabList>
        <TabIndicator mt="-3px" height="4px" bg="#5876B7" borderRadius="5px" />
      </Tabs>
      <button className={styles.createProjectButton}>
        <Image src={PlusCircleIcon} alt="Create Project" />
        Create a Project
      </button>
    </div>
  );
};

export default TabsSection;
