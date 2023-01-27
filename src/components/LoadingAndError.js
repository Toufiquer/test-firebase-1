import React from "react";
import Loading from "./Loading";

const LoadingAndError = ({ loading, error }) => {
  if (error) {
    console.log(error);
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return;
};

export default LoadingAndError;
