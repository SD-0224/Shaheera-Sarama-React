import React from "react";
import styles from "./Select.module.css";
import { useId } from "react";
/* ...props => to gather any additional props that are passed to the Select component, 
but not explicitly destructured. 
These additional props are then spread onto the <select> element. 
*/
export default function Select({ label, options, className, ...props }) {
  let id = useId();
  return (
    <div className={`${styles.select} ${styles.sort}`}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.selcetBottom}>
        <select name="" id={id} {...props}>
          <option value="">default</option>
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
