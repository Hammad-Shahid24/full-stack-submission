import React from "react";
import styles from "./Footer.module.scss"; // Import the SCSS file for styling
import DocumentIcon from "../../../public/images/documentation.svg";
import CalculateIcon from "../../../public/images/calculate.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/documentation")}
          aria-label="Explore Documentation"
        >
          <Image
            className={styles.img}
            src={DocumentIcon}
            alt="Documentation icon"
          />
          Explore Documentation
        </button>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/cost-calculator")}
          aria-label="Cost Calculator"
        >
          <Image
            className={styles.img}
            src={CalculateIcon}
            alt="Cost Calculator icon"
          />
          Cost Calculator
        </button>
        <button
          className={styles.footerButton}
          onClick={() => (window.location.href = "/billing-calculator")}
          aria-label="Billing Calculator"
        >
          <Image
            className={styles.img}
            src={CalculateIcon}
            alt="Billing Calculator icon"
          />
          Billing Calculator
        </button>
      </div>
    </div>
  );
};

export default Footer;
