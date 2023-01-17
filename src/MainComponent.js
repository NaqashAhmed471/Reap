import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/logIn/Login";
import SignIn from "./components/signUp/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";
import Admin from "./Admin";

const MainComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SignIn />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route exact path="/*" element={<Admin />}></Route>
      </Route>
    </Routes>
  );
};

export default MainComponent;
