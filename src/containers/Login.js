import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../Components/LoaderButton";
import "./styled-containers/Login.css";
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
      alert(e.message + " incorect Username or Password! ");
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
