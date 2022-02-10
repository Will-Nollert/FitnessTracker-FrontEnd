import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../Components/LoaderButton";
import "./Login.css";
import { useAppContext } from "../lib/contexLib";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  //store what the user enters in the
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function validateForm() {
    return username.length > 0 && password.length > 7;
  }

  async function handleSubmit(event) {
    //event.onload();
    event.preventDefault();
    setIsLoading(true);

    const LOGIN_URL =
      "https://glacial-temple-22682.herokuapp.com/api/users/login";

    try {
      const { data: user } = await axios.post(LOGIN_URL, {
        username,
        password,
      });
      console.log(user.token);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  }

  /*     try {
      const response = await fetch(
        `http://fitnesstrac-kr.herokuapp.com/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            },
          }),
        }
      );
      const { data } = await response.json();
      console.log(data);
      //const jotToken = JSON.stringify(data.token);
      //localStorage.setItem(`stAuth`, jotToken);
      //alert("Logged in");
      userHasAuthenticated(true);
      history.push("/");
      //console.log(localStorage);
      //console.log(jotToken);
    } catch (e) {
      onError(e);
    }
  } */
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
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}
