import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import styles from "./WelcomeSection.module.scss";
import CompletedIcon from "../../../public/images/green-folder.svg";
import OngoingIcon from "../../../public/images/blue-folder.svg";
import DraftsIcon from "../../../public/images/yellow-folder.svg";
import CancelledIcon from "../../../public/images/red-folder.svg";
import FolderItem from "./folderItem/folderItem";

interface WelcomeSectionProps {
  name: string;
  summary: string;
  folder: {
    completed: number;
    ongoing: number;
    drafts: number;
    cancelled: number;
  };
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  name,
  summary,
  folder,
}) => {
  return (
    <Box className={styles.welcomeSection}>
      <h1 className={styles.heading}>{`Welcome Back, ${name}!`}</h1>
      <p className={styles.summary}>{summary}</p>
      <Flex className={styles.folderItems}>
        <FolderItem
          icon={CompletedIcon}
          count={folder.completed}
          label="Completed"
          altText="Green folder icon"
        />
        <FolderItem
          icon={OngoingIcon}
          count={folder.ongoing}
          label="Ongoing"
          altText="Blue folder icon"
        />
        <FolderItem
          icon={DraftsIcon}
          count={folder.drafts}
          label="Drafts"
          altText="Yellow folder icon"
        />
        <FolderItem
          icon={CancelledIcon}
          count={folder.cancelled}
          label="Cancelled"
          altText="Red folder icon"
        />
      </Flex>
    </Box>
  );
};

export default WelcomeSection;
