import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Cerrar sesión
    navigate("/login");
  };

  return (
    <div className="mb-5">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light h1" href="/api/stories">
            Stories
          </a>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
