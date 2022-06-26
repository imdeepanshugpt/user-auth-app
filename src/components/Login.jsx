import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../apis/axios";

export const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const submitForm = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    const data = {
      username: event.target[0].value,
      password: event.target[1].value
    };
    let setDetails;
    try{
      const loginDetails = await loginAPI(data);
      setDetails = loginDetails.data[0];
      setDetails['role'] =  [setDetails['role']];
      setAuth(setDetails);
      navigate("/home");
    } catch(error){
      window.alert("error occured", error);
    }
    // if (event.target[0].value === "student@gmail.com") {
    //   setAuth({
    //     user: event.target[0].value,
    //     pwd: event.target[1].value,
    //     roles: ["student"],
    //   });
    // }
    // if (event.target[0].value === "staff@gmail.com") {
    //   setAuth({
    //     user: event.target[0].value,
    //     pwd: event.target[1].value,
    //     roles: ["staff"],
    //   });
    // }
    
  };
  return (
    <div>
      <form onSubmit={(event) => submitForm(event)}>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
