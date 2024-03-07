import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index.js"));
const Login = lazy(() => import("../pages/Login/index.js"));

<Routes>
  <Route path="/">
    <Home />
  </Route>
  ;
  <Route path="/login">
    <Login />
  </Route>
  ;
  <Route path="/:id">
    <h2>ว่างป่าว</h2>
  </Route>
  ;
</Routes>;
