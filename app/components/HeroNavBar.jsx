import React, { useState } from "react";
import styles from "./heronavbar.module.css";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const HeroNavBar = ({ show }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, isActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      isActiveSection(id);
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <div className={`${styles.navbar} ${show ? styles.scrolled : ""}`}>
        <div>
          <Image
            src="/images/kohinoorlogo.png"
            alt="EV Homes Logo"
            width={250}
            height={50}
            className={styles.logoNav}
          />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li
              className={activeSection === "home" ? styles.activeLink : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? styles.activeLink : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className={activeSection === "members" ? styles.activeLink : ""}
              onClick={() => scrollToSection("members")}
            >
              Committee Members
            </li>
            <li
              className={activeSection === "gallery" ? styles.activeLink : ""}
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </li>
            <li
              className={activeSection === "location" ? styles.activeLink : ""}
              onClick={() => scrollToSection("location")}
            >
              Location
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger} onClick={() => setSidebarOpen(true)}>
          <GiHamburgerMenu size={25} color="white" />
        </div>
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
          <div
            className={styles.closeIcon}
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={28} />
          </div>
          <ul className={styles.sidebarList}>
            <li
              className={activeSection === "home" ? styles.activeLink : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? styles.activeLink : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className={activeSection === "members" ? styles.activeLink : ""}
              onClick={() => scrollToSection("members")}
            >
              Committee Members
            </li>
            <li
              className={activeSection === "gallery" ? styles.activeLink : ""}
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </li>
            <li
              className={activeSection === "location" ? styles.activeLink : ""}
              onClick={() => scrollToSection("location")}
            >
              Location
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroNavBar;
