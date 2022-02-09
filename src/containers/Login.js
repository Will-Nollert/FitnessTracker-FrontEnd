import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../lib/contexLib";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  //store what the user enters in the
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return username.length > 0 && password.length > 7;
  }

  async function handleSubmit(event) {
    //event.onload();
    event.preventDefault();

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const { data } = await response.json();
      const jotToken = JSON.stringify(data.token);
      localStorage.setItem(`stAuth`, jotToken);
      alert("Logged in");
      userHasAuthenticated(true);
      history.push("/");
      console.log(localStorage);
      //console.log(jotToken);
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
