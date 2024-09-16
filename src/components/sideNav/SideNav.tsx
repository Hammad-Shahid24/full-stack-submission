import React, { useState } from "react";
import styles from "./SideNav.module.scss"; // Import the SCSS file for styling
import MudirrLogo from "../../../public/images/mudirr-logo.svg"; // Import the Mudirr logo
import AvatarLogo from "../../../public/images/avatar.svg"; // Import the Avatar logo
import Business1Logo from "../../../public/images/business-1.svg"; // Import the Business 1 logo
import Business2Logo from "../../../public/images/business-2.svg"; // Import the Business 1 logo
import Business3Logo from "../../../public/images/business-3.svg"; // Import the Business 1 logo
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa"; // Import star icons

const SideNav: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<"personal" | "invited">(
    "personal"
  );
  const [selectedStarButton, setSelectedStarButton] =
    useState<string>("Dashboard");

  return (
    <div className={styles.sideNav}>
      <div className={styles.logo}>
        <Image src={MudirrLogo} alt="mudirr" />
      </div>

      <div className={styles.avatarContainer}>
        <Image src={AvatarLogo} alt="avatar" />
        <div className={styles.nameEmailContainer}>
          <h4>Haseena Jameela</h4>
          <p>Haseenajameela@email.com</p>
        </div>
        <IoChevronDown color="#050504" />
      </div>

      <div className={styles.personalInvitedContainer}>
        <button
          className={`${styles.personalInvitedButton} ${
            selectedButton === "personal" ? styles.active : ""
          }`}
          onClick={() => setSelectedButton("personal")}
        >
          Personal
        </button>
        <button
          className={`${styles.personalInvitedButton} ${
            selectedButton === "invited" ? styles.active : ""
          }`}
          onClick={() => setSelectedButton("invited")}
        >
          Invited
        </button>
      </div>

      <div className={styles.coloredSideNavContainer}>
        <div className={styles.starButtons}>
          <button
            className={`${styles.starButton} ${
              selectedStarButton === "Dashboard" ? styles.active : ""
            }`}
            onClick={() => setSelectedStarButton("Dashboard")}
          >
            {selectedStarButton === "Dashboard" ? (
              <FaStar size={17} color="#050504" />
            ) : (
              <FaRegStar size={17} color="#050504" />
            )}
            Dashboard
          </button>
          <button
            className={`${styles.starButton} ${
              selectedStarButton === "Projects" ? styles.active : ""
            }`}
            onClick={() => setSelectedStarButton("Projects")}
          >
            {selectedStarButton === "Projects" ? (
              <FaStar size={17} color="#050504" />
            ) : (
              <FaRegStar size={17} color="#050504" />
            )}
            Project History
          </button>
          <button
            className={`${styles.starButton} ${
              selectedStarButton === "Settings" ? styles.active : ""
            }`}
            onClick={() => setSelectedStarButton("Settings")}
          >
            {selectedStarButton === "Settings" ? (
              <FaStar size={17} color="#050504" />
            ) : (
              <FaRegStar size={17} color="#050504" />
            )}
            Client History
          </button>
          <button
            className={`${styles.starButton} ${
              selectedStarButton === "Help" ? styles.active : ""
            }`}
            onClick={() => setSelectedStarButton("Help")}
          >
            {selectedStarButton === "Help" ? (
              <FaStar size={17} color="#050504" />
            ) : (
              <FaRegStar size={17} color="#050504" />
            )}
            Emails
          </button>
        </div>

        <hr className={styles.divider} />

        <div className={styles.workspacesContainer}>
          <div className={styles.workspaceHeader}>
            <span className={styles.leftWorkspaceStuff}>
              <IoChevronUp className={styles.chevronIcon} /> WORKSPACES
            </span>
            <span className={styles.rightWorkspaceStuff}>Coming Soon</span>
          </div>
          <div className={styles.workspaceButtons}>
            <button className={styles.workspaceButton}>
              Workspace Name 1
              <IoChevronDown className={styles.workspaceButtonChevron} />
            </button>
            <button className={styles.workspaceButton}>
              Workspace Name 2
              <IoChevronDown className={styles.workspaceButtonChevron} />
            </button>
            <button className={styles.workspaceButton}>
              Workspace Name 3
              <IoChevronDown className={styles.workspaceButtonChevron} />
            </button>
          </div>
          <div className={styles.seeAll}>See All</div>
        </div>

        <hr className={styles.divider} />

        {/* Below is the LaunchPad component */}
        <div className={styles.workspacesContainer}>
          <div className={styles.workspaceHeader}>
            <span className={styles.leftWorkspaceStuff}>
              <IoChevronUp className={styles.chevronIcon} /> LAUNCHPAD
            </span>
          </div>
          <div className={styles.workspaceButtons}>
            <button className={styles.launchpadButton}>
              <span className={styles.launchpadButtonLeftStuff}>
                <Image src={Business1Logo} alt="business" />
                Business Name 1
              </span>
              <IoChevronDown className={styles.launchpadButtonChevron} />
            </button>
            <button className={styles.launchpadButton}>
              <span className={styles.launchpadButtonLeftStuff}>
                <Image src={Business2Logo} alt="business" />
                Business Name 2
              </span>
              <IoChevronDown className={styles.launchpadButtonChevron} />
            </button>
            <button className={styles.launchpadButton}>
              <span className={styles.launchpadButtonLeftStuff}>
                {" "}
                <Image src={Business3Logo} alt="business" />
                Business Name 3
              </span>
              <IoChevronDown className={styles.launchpadButtonChevron} />
            </button>
          </div>
          <div className={styles.seeAll}>See All</div>
        </div>
      </div>

      <div className={styles.workspacesContainer}>
        <div className={styles.workspaceHeader}>
          <span className={styles.leftWorkspaceStuff}>
            <IoChevronUp className={styles.chevronIcon} /> PINNED PROJECTS (3/3)
          </span>
        </div>
        <div className={styles.workspaceButtons}>
          <button className={styles.launchpadButton}>
            <span className={styles.launchpadButtonLeftStuff}>
              <FaRegStar size={17} color="#050504" />
              Project Name 1
            </span>
            <IoChevronDown className={styles.launchpadButtonChevron} />
          </button>
          <button className={styles.launchpadButton}>
            <span className={styles.launchpadButtonLeftStuff}>
              <FaRegStar size={17} color="#050504" />
              Project Name 2
            </span>
            <IoChevronDown className={styles.launchpadButtonChevron} />
          </button>
          <button className={styles.launchpadButton}>
            <span className={styles.launchpadButtonLeftStuff}>
              <FaRegStar size={17} color="#050504" />
              Project Name 3
            </span>
            <IoChevronDown className={styles.workspaceButtonChevron} />
          </button>
        </div>
      </div>

      <hr className={styles.divider} />
    </div>
  );
};

export default SideNav;
