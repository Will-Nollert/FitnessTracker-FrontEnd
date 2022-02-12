import React, { useState, useEffect } from "react";
import { ActivitiesCard } from "../Components/ActivitiesCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styled-containers/AuthActivies.css";
const Activities = () => {
  const [activity, setActivity] = useState([]);
  const [name, setActivtyName] = useState("");
  const [description, setActivityDescription] = useState("");

  function validateForm() {
    return name.length > 0 && description.length > 0;
  }

  const ACTIVITIES_URL = `http://glacial-temple-22682.herokuapp.com/api/activities`;

  async function fetchAllActivities(ACTIVITIES_URL) {
    const activity = await fetch(ACTIVITIES_URL);
    return await activity.json();
  }

  useEffect(() => {
    fetchAllActivities(ACTIVITIES_URL).then((res) => setActivity(res));
  }, []);
  //does URL need to be depdency here?!

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("stAuth");
      //console.log("Bearer " + token);

      const response = await fetch(ACTIVITIES_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });
      const data = await response.json();
      console.log(data);
      console.log(localStorage);
    } catch (error) {
      alert(error.message + "Error creating activity try again");
    }
  }

  return (
    <div className="Home">
      <div className="lander">
        <h1>Activities</h1>
        <p>Create a New Activity</p>
        <p className="text-muted">
          As a registered user on the Activities tab, I want to: be shown a form
          to create a new activity (by name and description) be shown an error
          if the activity already exists
        </p>

        <Form onSubmit={handleSubmit} className="newActivty">
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Activity Title</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter Activity"
              onChange={(e) => setActivtyName(e.target.value)}
            />
            <Form.Text className="text-muted">
              Make sure your activty is not already listed!
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setActivityDescription(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Create Activity
          </Button>
        </Form>
        <hr></hr>
        <p className="text-muted">List all Activities</p>
      </div>
      {activity.map((activity) => {
        return <ActivitiesCard activity={activity} />;
      })}
    </div>
  );
};

export default Activities;
