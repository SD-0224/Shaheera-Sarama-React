import React from "react";
import getRating from "./../../common/rating.js";
export default function Star({ className, courseRating }) {
  let res = getRating(courseRating);
  return <div className={className}>{res}</div>;
}
