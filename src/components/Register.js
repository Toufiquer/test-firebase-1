import React, { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import Loading from "./Loading";
import Social from "./Social";
const customId = "Register Toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, userEmailPass, loadingEmailPass, errorEmailPass] = useCreateUserWithEmailAndPassword(auth);
  if (errorEmailPass) {
    console.log("error ");
  }
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid || userEmailPass?.uid) {
      toast.success("Register Successful", {
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
    createUserWithEmailAndPassword(email, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Your Email" onBlur={(e) => setEmail(e.target.value)} />
        <input type="password" onBlur={(e) => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
      <Social></Social>
    </div>
  );
};

export default Register;
