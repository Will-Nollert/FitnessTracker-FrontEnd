import React, { useState, useEffect } from "react";
import { RoutinesCard } from "../Components/RoutinesCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Routines;
