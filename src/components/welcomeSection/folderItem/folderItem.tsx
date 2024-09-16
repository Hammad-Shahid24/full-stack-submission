import React from "react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./FolderItem.module.scss";

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
    <Flex className={styles.folderContainer} align="center" mt={4}>
      <div className={styles.folder}>
        <Image
          src={icon}
          alt={altText}
          width={40}
          height={40}
          className={styles.img}
        />
        <div>
          <h3 className={styles.count}>{formattedCount}</h3>
          <p className={styles.label}>{label}</p>
        </div>
      </div>
    </Flex>
  );
};

export default FolderItem;
