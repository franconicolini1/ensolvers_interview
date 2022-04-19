import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = ({ children }) => {
  // Children is AppRouter
  const { log } = useContext(AuthContext);

  return log.log ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
