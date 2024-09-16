import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./FolderItem.module.scss";
import Image from "next/image";

interface FolderItemProps {
  icon: string;
  count: number;
  label: string;
  altText: string;
}

const FolderItem: React.FC<FolderItemProps> = ({
  icon,
  count,
  label,
  altText,
}) => {
  // Format the count to be two digits
  const formattedCount = count < 10 ? `0${count}` : count.toString();

  return (
    <Flex className={styles.folderContainer}>
      <div className={styles.folder}>
        <Image className={styles.img} src={icon} alt={altText} />
        <div>
          <h3 className={styles.count}>{formattedCount}</h3>
          <p className={styles.label}>{label}</p>
        </div>
      </div>
    </Flex>
  );
};

export default FolderItem;
