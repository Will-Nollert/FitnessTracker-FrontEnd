import React, { useState, useEffect } from "react";
import { ActivitiesCard } from "../Components/ActivitiesCard";

const Activities = () => {
  const [activity, setActivity] = useState([]);

  const ACTIVITIES_URL =
    "http://glacial-temple-22682.herokuapp.com/api/activities";

  async function fetchAllActivities(ACTIVITIES_URL) {
    const activity = await fetch(ACTIVITIES_URL);
    return await activity.json();
  }

  useEffect(() => {
    fetchAllActivities(ACTIVITIES_URL).then((res) => setActivity(res));
  }, []);

  return (
    <div className="Home">
      <div className="lander">
        <h1>Activities</h1>
        <p className="text-muted">list all Activities created</p>
      </div>
      {activity.map((activity) => {
        //console.log(posts.title)
        return <ActivitiesCard activity={activity} />;
      })}
    </div>
  );
};

export default Activities;
