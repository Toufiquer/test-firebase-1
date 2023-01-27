import React from "react";
import auth from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import LoadingAndError from "./LoadingAndError";
const Social = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  if (loading || error) {
    console.log(loading, error);
    <LoadingAndError loading={loading} error={error}></LoadingAndError>;
    return;
  }

  return (
    <div>
      Social
      <h3>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Continue With Google
        </button>
      </h3>
    </div>
  );
};

export default Social;
