import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const Login = lazy(() => import("../pages/Login"));
const Folders = lazy(() => import("../pages/Folders"));
const Stories = lazy(() => import("../pages/Stories"));

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/api/stories" element={<Folders />} />
          <Route exact path="/api/stories/:folder" element={<Stories />} />
          <Route path="*" element={<Navigate to="/api/stories" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
