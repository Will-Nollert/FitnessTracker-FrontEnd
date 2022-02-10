import React from "react";

export const ActivitiesCard = ({ activity }) => {
  console.log(activity);
  return (
    <div id="postCards">
      <h2 className="postCardElements" id="postCardTitle">
        {activity.name}
      </h2>
      <hr></hr>
      <div className="postCardElements">{activity.description}</div>
    </div>
  );
};

export default ActivitiesCard;
