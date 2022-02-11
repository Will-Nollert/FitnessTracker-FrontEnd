import React, { useState, useEffect } from "react";
import { RoutinesCard } from "../Components/RoutinesCard";

export const Routines = () => {
  const [routine, setRoutine] = useState([]);

  const ROUTINES_URL = "http://glacial-temple-22682.herokuapp.com/api/routines";

  async function fetchAllRoutines(ROUTINES_URL) {
    const routine = await fetch(ROUTINES_URL);
    return await routine.json();
  }

  useEffect(() => {
    fetchAllRoutines(ROUTINES_URL).then((res) => setRoutine(res));
  }, []);

  return (
    <div className="Home">
      <div className="lander">
        <h1>Routines</h1>
        <p className="text-muted">THIS IS LOGGED IN ROUTINES BABBY</p>
      </div>
      {routine.map((routine) => {
        return <RoutinesCard routine={routine} />;
      })}
    </div>
  );
};

export default Routines;
