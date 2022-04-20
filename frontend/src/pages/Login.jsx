import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MIN_PASS = 6;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgError, setMsgError] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    setMsgError("");
    if (pass.length < MIN_PASS)
      return setMsgError("La contraseña debe tener 6 caracteres o mas");
  };

  const loginUser = () => {
    if (!email.trim() || !pass.trim())
      return setMsgError("Ambos campos deben estar llenos");
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col text-center d-flex flex-column justify-content-center ">
        <h1 className="h1 mb-5">Stories</h1>
        <form className="form-group">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control w-100"
            placeholder="Introduzca su email"
            type="email"
            value={email ? email : ""}
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            className="form-control mt-4 w-100"
            placeholder="Introduzca su contraseña"
            type="password"
            value={pass ? pass : ""}
          />
          <input
            className="btn btn-dark btn-block mt-5 w-100"
            value="Registrar Usuario"
            type="button"
            onClick={(e) => registerUser(e)}
          />
        </form>
        <button
          className="btn btn-success btn-block mt-1 w-100"
          onClick={loginUser}
        >
          Iniciar sesión
        </button>
        {msgError ? (
          <p className="text-danger mt-3">{msgError}</p>
        ) : (
          <span></span>
        )}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
