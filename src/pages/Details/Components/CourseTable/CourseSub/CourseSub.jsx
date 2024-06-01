import React from "react";

export default function CourseSub({ subTopics }) {
  return subTopics.map((subTopic,index) => (
    <li key={index}>
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      <a href="#">{subTopic}</a>
    </li>
  ));
}
