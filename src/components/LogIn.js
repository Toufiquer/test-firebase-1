import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Social from "./Social";

const LogIn = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(from);
  function handleSubmit(event) {
    event.preventDefault();
    navigate(from, { replace: true });
  }
  return (
    <div>
      Log In <Social handleSubmit={handleSubmit}></Social>
    </div>
  );
};

export default LogIn;
