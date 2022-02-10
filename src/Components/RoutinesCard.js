import React from "react";

export const RoutinesCard = ({ routine }) => {
  const routineActivies = routine.activities;

  const { name, description, duration, count } = {
    name: routineActivies.map((a) => a.name + " "),
    description: routineActivies.map((a) => a.description + " "),
    duration: routineActivies.map((a) => a.duration + ", "),
    count: routineActivies.map((a) => a.count + ", "),
  };

  console.log(routine);

  return (
    <div id="activitiesCard">
      <h2 className="activitiesCardElements" id="activitiesCardTitle">
        <span id="ActivtyNameTag">Routine Name: </span>
        <span id="ActivityName">{routine.name}</span>
      </h2>
      <hr></hr>
      <div className="activitiesCardElements">
        <span id="ActivtyDescriptionTag">Routine Goal: </span>
        <span id="ActivityDescription">{routine.goal}</span>
        <div>
          This Routine's Activites are... <span>{name}</span>
        </div>
        <div>Description: {description}</div>
        <div>Activites Duration: {duration}</div>
        <div>Activites Rep Count: {count}</div>
      </div>
      <hr></hr>
      <h6 className="activitiesCardElements">
        Created By: {routine.creatorName}
      </h6>
    </div>
  );
};

export default RoutinesCard;
