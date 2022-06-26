import React from "react";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../apis/axios";

export const Register = () => {
  const navigate = useNavigate();
  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    const data = {
      username: event.target[0].value,
      password: event.target[1].value,
      role: event.target[2].value,
    };
    try {
      registerAPI(data);
      navigate("/home");
    } catch (error) {
        window.alert("error occured", error);
    }
  };
  return (
    <div>
      <form onSubmit={(event) => submitForm(event)}>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <label htmlFor="roles">Choose a role:</label>
        <select name="roles" id="roles">
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
