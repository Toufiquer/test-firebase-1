import React from "react";
import { Route } from "react-router-dom";

const CustomRoute = ({ to, element }) => {
  return <Route tp={to} element={element}></Route>;
};

export default CustomRoute;
