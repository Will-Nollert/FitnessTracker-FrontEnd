import React from "react";
import "./ActivitiesCard.css";

export const ActivitiesCard = ({ activity }) => {
  console.log(activity);
  return (
    <div id="activitiesCard">
      <h2 className="activitiesCardElements" id="activitiesCardTitle">
        {activity.name}
      </h2>
      <hr></hr>
      <div className="activitiesCardElements">{activity.description}</div>
    </div>
  );
};

export default ActivitiesCard;
