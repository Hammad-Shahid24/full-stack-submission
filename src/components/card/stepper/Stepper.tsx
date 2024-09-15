import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./Stepper.module.scss";

interface StepperProps {
  steps: number;
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <Box>
      <Flex className={styles.stepperContainer}>
        {Array.from({ length: steps }).map((_, index) => (
          <Flex key={index} className={styles.step}>
            <Box
              className={`${styles.circle} ${
                index < currentStep ? styles.circleActive : ""
              }`}
            />
            {index < steps - 1 && (
              <Box
                className={`${styles.line} ${
                  index < currentStep - 1 ? styles.lineActive : ""
                }`}
              />
            )}
          </Flex>
        ))}
        <Text className={styles.stepText}>
          {currentStep}/{steps} Done
        </Text>
      </Flex>
    </Box>
  );
};

export default Stepper;
