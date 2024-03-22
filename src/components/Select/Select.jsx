import React from "react";
import styles from "./Select.module.css";
export default function Select({ label, options, className }) {
  return (
    <div className={`${styles.select} ${styles.sort}`}>
      <label htmlFor="sort">{label}</label>
      <div className={styles.selcetBottom}>
        <select name="" id="sort">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
