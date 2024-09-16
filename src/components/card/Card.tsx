import {
  Box,
  Button,
  Heading,
  Text,
  Progress,
  useSteps,
} from "@chakra-ui/react";
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
  progress: number;
  nextMilestone: string;
  onFollowUpClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
    { title: "Forth", description: "Enter Email" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;
  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box
      className={styles.card}
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
      <Badge size="sm">{"Ongoing"}</Badge>
      <Badge size="sm">{"Next Milestone: Dec 5th"}</Badge>

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
