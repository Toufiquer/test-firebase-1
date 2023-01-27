import React from "react";
import Loading from "./Loading";

const LoadingAndError = ({ loading, error }) => {
  console.log(loading, error);
  if (loading) {
    console.log("error:", error);
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return;
};

export default LoadingAndError;
