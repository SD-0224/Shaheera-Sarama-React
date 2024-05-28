import React, { useEffect, useState } from "react";

//Creating component for store a localstorage value
export default function useStorageState(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const [State, setState] = useState(
    stored ? JSON.parse(stored) : defaultValue
  );
  useEffect(() => {
    if (State) {
      try {
        localStorage.setItem(key, JSON.stringify(State));
      } catch (err) {
        console.log("error in favs", err);
      }
    }
  },[State]);
  return [State, setState];
}
