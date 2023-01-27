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
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route
          path={"/private"}
          element={
            <RequireAuth>
              <Private></Private>
            </RequireAuth>
          }
        ></Route>
        <Route path={"/logIn"} element={<LogIn></LogIn>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"*"} element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;
