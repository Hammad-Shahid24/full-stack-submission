import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import styles from "./Card.module.scss";
import Stepper from "./stepper/Stepper";
import Badge from "./badge/Badge";
import ArrowIcon from "../../../public/images/arrow.svg";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  status: string;
  nextMilestone: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  nextMilestone,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardHeader}>
        <Heading size="md" className={styles.title}>
          {title}
        </Heading>
        <span>
          <IoEllipsisVertical size={24} color="grey" />
        </span>
      </div>
      <Text color="gray.500">Web</Text>
      <Stepper steps={4} currentStep={3} />
      <Badge size="sm">{status}</Badge>
      <Badge size="sm">{"Next Milestone: " + nextMilestone}</Badge>

      <div className={styles.cardFooter}>
        <Heading size="sm" color={"#050504"} className={styles.footerHeading}>
          {"Follow up with manager"}
        </Heading>

        <button className={styles.arrowButton}>
          <Image src={ArrowIcon} alt="ArrowIcon" />
        </button>
      </div>
    </Box>
  );
};

export default ProjectCard;
