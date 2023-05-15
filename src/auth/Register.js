import { useEffect, useState } from "react";
import axios from "axios";
import "./auth.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://tripwheelsnation-api.onrender.com/register/register", { name, email, username: userName, password, confirmPassword })
      .then((response) => {
        console.log(response);
        localStorage.setItem("authToken", response.data.token);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="auth">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Names</label>
          <input
            type="text"
            name="name"
            placeholder="full names"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="confirm password">Confirm password</label>
          <input
            type="password"
            name="confirm password"
            placeholder="confirm"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
