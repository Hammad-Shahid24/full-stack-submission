import { Box } from "@chakra-ui/react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ size = "md", children }) => {
  return <Box className={`${styles.badge} ${styles[size]}`}>{children}</Box>;
};

export default Badge;
