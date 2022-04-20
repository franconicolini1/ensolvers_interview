import React, { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
const Login = lazy(() => import("../pages/Login"));
const Folders = lazy(() => import("../pages/Folders"));
const Tasks = lazy(() => import("../pages/Tasks"));

const AppRouter = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/api/stories" element={<Folders />} />
            <Route exact path="/api/stories/:folder" element={<Tasks />} />
            <Route path="*" element={<Navigate to="/api/stories" />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default AppRouter;
