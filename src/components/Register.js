import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Social from "./Social";

const Register = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  function handleSubmit(event) {
    event.preventDefault();
    navigate(from, { replace: true });
  }
  return (
    <div>
      Register
      <Social handleSubmit={handleSubmit}></Social>
    </div>
  );
};

export default Register;
