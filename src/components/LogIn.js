import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase";
import LoadingAndError from "./LoadingAndError";
import Social from "./Social";

const LogIn = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid) {
      navigate(from, { replace: true });
    }
  }, [user?.uid, from, navigate]);
  if (loading || error) {
    console.log(loading, error);
    <LoadingAndError loading={loading} error={error}></LoadingAndError>;
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(from, { replace: true });
  }
  return (
    <div>
      Log In
      <Social></Social>
    </div>
  );
};

export default LogIn;
