import React, { useState } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo / Brand */}
        <NavLink to="/" className={styles.brand}>
          <div className={styles.logoBadge}>A</div>
          <span>Egypt Tours gate</span>
        </NavLink>

        {/* Burger for mobile */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>

            {/* Example Dropdown */}
            <li
              className={styles.dropdown}
              onClick={() => setDropOpen(!dropOpen)}
            >
              <button className={styles.dropToggle}>
                Tours ▾
              </button>
              <ul
                className={`${styles.dropdownMenu} ${
                  dropOpen ? styles.open : ""
                }`}
              >
                <li>
                  <NavLink to="/tours/web" className={styles.dropdownLink}>
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tours/mobile" className={styles.dropdownLink}>
                    Mobile Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tours/cloud" className={styles.dropdownLink}>
                    Cloud Hosting
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
            <a className={styles.link}  href="https://www.egypttoursgate.com/about">About</a>      

            </li>
            <li>
              <NavLink to="/contact" className={styles.link}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <button className={styles.ctaBtn}>
          <NavLink to="/book" className={styles.link}>
          Book Now
              </NavLink>
            </button>
        </div>
      </div>
    </nav>
  );
}
