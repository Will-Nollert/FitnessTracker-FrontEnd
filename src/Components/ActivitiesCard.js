import React from "react";
import "./ActivitiesCard.css";

export const ActivitiesCard = ({ activity }) => {
  console.log(activity);
  return (
    <div id="activitiesCard">
      <h2 className="activitiesCardElements" id="activitiesCardTitle">
        <span id="ActivtyNameTag">Activity Name: </span>
        <span id="ActivityName">{activity.name}</span>
      </h2>
      <hr></hr>
      <div className="activitiesCardElements">
        <span id="ActivtyDescriptionTag">Activity Description: </span>
        <span id="ActivityDescription">{activity.description}</span>
      </div>
    </div>
  );
};

export default ActivitiesCard;
