import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PublicRouter = ({ children }) => {
  // Children is Login
  const { log } = useContext(AuthContext);

  return !log.log ? children : <Navigate to="/api/stories" />;
};

export default PublicRouter;
