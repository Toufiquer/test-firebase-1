import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase";
import LoadingAndError from "./LoadingAndError";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading || error) {
    <LoadingAndError loading={loading} error={error}></LoadingAndError>;
    return;
  }
  return (
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/private">Private</Link>
        </li>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <>
            <li>
              <Link to="/logIn">LogIn</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
