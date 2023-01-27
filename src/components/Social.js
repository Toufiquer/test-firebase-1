import React from "react";
import auth from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import LoadingAndError from "./LoadingAndError";
const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  <LoadingAndError loading={loading} error={error}></LoadingAndError>;
  if (user?.uid) {
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
