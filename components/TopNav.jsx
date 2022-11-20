import React from "react";
import Search from "./Search";
import styles from "../styles/TopNav.module.css";
import ToggleDarkMode from "./ToggleDarkMode";
function TopNav() {
  return (
    <nav className={styles.navigation}>
      {/* Logo */}
      <h1>SoMe / Carbon</h1>

      <div>
        {/* Search */}
        <Search />

        {/* Toggle Dark Mode */}
        <ToggleDarkMode />
      </div>
    </nav>
  );
}

export default TopNav;
