import React from "react";
import styles from "./Footer.module.scss"; // Import the SCSS file for styling
import DocumentIcon from "../../../public/images/documentation.svg";
import CalculateIcon from "../../../public/images/Calculate.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/documentation")}
        >
          <Image className={styles.img} src={DocumentIcon} alt={"Doc icon"} />
          Explore Documentation
        </button>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/cost-calculator")}
        >
          <Image className={styles.img} src={CalculateIcon} alt={"Cal icon"} />
          Cost Calculator
        </button>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/billing-calculator")}
        >
          <Image className={styles.img} src={CalculateIcon} alt={"Cal icon"} />
          Billing Calculator
        </button>
      </div>
    </div>
  );
};

export default Footer;
