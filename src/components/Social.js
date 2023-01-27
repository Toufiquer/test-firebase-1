import React from "react";
import auth from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "./Loading";
const Social = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: ", error);
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
