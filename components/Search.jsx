import React from "react";
import styles from "../styles/Search.module.css";

function Search() {
  return (
    <label className={styles.searchLabel} htmlFor="search">
      <input className={styles.searchInput} type="text" id="search" name="search" placeholder="Search results ID" />
    </label>
  );
}

export default Search;
