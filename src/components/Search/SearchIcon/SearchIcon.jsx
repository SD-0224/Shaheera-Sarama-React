import React from "react";
import "./SearchIcon.module.css";
export default function SearchIcon({ ...props }, { value }) {
  return (
    <>
      <ion-icon name="search-outline"></ion-icon>
      <input
        type="search"
        placeholder="Search the website..."
        {...props}
        value={value}
      />
    </>
  );
}
