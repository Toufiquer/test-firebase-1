import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase";
import LoadingAndError from "./LoadingAndError";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading || error) {
    console.log(loading, error);
    return <LoadingAndError loading={loading} error={error}></LoadingAndError>;
  }
  if (user?.uid) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
