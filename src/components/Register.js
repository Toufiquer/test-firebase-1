import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase";
import Loading from "./Loading";
import Social from "./Social";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid) {
      navigate(from, { replace: true });
    }
  }, [user?.uid, from, navigate]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: ", error);
    return;
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   navigate(from, { replace: true });
  // }
  return (
    <div>
      Register
      <Social></Social>
    </div>
  );
};

export default Register;
