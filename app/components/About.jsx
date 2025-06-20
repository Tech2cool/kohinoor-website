import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeadline}>
        <span className={styles.leftdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
        About Kohinoor CHS.
        <span className={styles.rightdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
      </div>

      <div className={styles.aboutPara}>
        <strong className={styles.impText}>KOHINOOR</strong> Co-operative
        Housing Society (CHS) situated in Sector 8, Sanpada, Navi Mumbai,
        Maharashtra 400705 , was established with the completion of its building
        construction in <strong className={styles.impText}>March 2001</strong>.
        The society comprises a total of{" "}
        <strong className={styles.impText}>9 buildings</strong>, each
        thoughtfully designed to accommodate{" "}
        <strong className={styles.impText}>16 residential units</strong>, making
        it a well-planned and efficiently structured community. The management
        and day-to-day affairs of the society are overseen by a dedicated team
        of <strong className={styles.impText}>13 committee members</strong>,
        ensuring smooth operations and the well-being of all residents.
      </div>
      <div className={styles.aboutParaMobile}>
        <ul>
          <li>
            <strong className={styles.impText}>KOHINOOR</strong> Co-operative
            Housing Society (CHS) is located in Sector 8, Sanpada, Navi Mumbai,
            Maharashtra 400705.
          </li>
          <li>
            The society was established with the completion of its building
            construction in{" "}
            <strong className={styles.impText}>March 2001</strong>.
          </li>
          <li>
            It comprises a total of{" "}
            <strong className={styles.impText}>9 buildings</strong>.
          </li>
          <li>
            Each building includes{" "}
            <strong className={styles.impText}>16 residential units</strong>.
          </li>
          <li>
            The society is managed by{" "}
            <strong className={styles.impText}>13 committee members</strong> who
            oversee daily operations and resident welfare.
          </li>
        </ul>
      </div>

      <div className={styles.partitionDes}>
        <img src="/images/partition.png" alt="image" />
      </div>
    </div>
  );
};

export default About;
