import React from "react";
import Search from "./Search";
import styles from "../styles/NavBar.module.css";
import ModeToggle from "./ModeToggle";
/* import ToggleDarkMode from "./ToggleDarkMode"; */
function NavBar(props) {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navigation}>
          {/* Logo */}
          <h1>SoMe / Carbon</h1>
          <div className={styles.SearchToggle}>
            {/* Search */}
            <Search />
            <ModeToggle toggle={props.lightmode}></ModeToggle>
            {/* Toggle Dark Mode */}
            {/*      <ToggleDarkMode /> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
