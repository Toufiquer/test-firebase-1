import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase";
import Social from "./Social";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { toast } from "react-toastify";
const customId = "LogIn Toast";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, userEmailPass, loadingEmailPass, errorEmailPass] = useSignInWithEmailAndPassword(auth);
  if (errorEmailPass) {
    console.log("error ");
  }
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid || userEmailPass?.uid) {
      toast.success("Log In Successful", {
        toastId: customId,
      });
      navigate(from, { replace: true });
    }
  }, [user?.uid, from, navigate, userEmailPass?.uid]);
  if (loading || loadingEmailPass) {
    return <Loading></Loading>;
  }
  if (error || errorEmailPass) {
    toast.error(error?.message || errorEmailPass?.message, {
      toastId: customId,
    });

    // return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Your Email" onBlur={(e) => setEmail(e.target.value)} />
        <input type="password" onBlur={(e) => setPassword(e.target.value)} />
        <button>Sign In</button>
      </form>
      <Social></Social>
    </div>
  );
};

export default LogIn;
