import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Private from "./components/Private";
import Register from "./components/Register";
import "./App.css";
import RequireAuth from "./components/RequireAuth";
import TitleWithComponent from "./components/TitleWithComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path={"/"}
          element={
            <TitleWithComponent title={"Home"}>
              <Home></Home>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"/home"}
          element={
            <TitleWithComponent title="Home">
              <Home></Home>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"/about"}
          element={
            <TitleWithComponent title="About">
              <About></About>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"/private"}
          element={
            <TitleWithComponent title="Private">
              <RequireAuth>
                <Private></Private>
              </RequireAuth>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"/logIn"}
          element={
            <TitleWithComponent title="LogIn">
              <LogIn></LogIn>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"/register"}
          element={
            <TitleWithComponent title="Register">
              <Register></Register>
            </TitleWithComponent>
          }
        ></Route>
        <Route
          path={"*"}
          element={
            <TitleWithComponent title="Not Found">
              <NotFound></NotFound>
            </TitleWithComponent>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
