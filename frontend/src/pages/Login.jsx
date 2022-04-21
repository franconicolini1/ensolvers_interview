import React, { useState } from "react";

const MIN_PASS = 6;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const registerUser = (e) => {
    setError("");
    if (pass.length < MIN_PASS)
      return setError("Password must have 6 characters or more");
  };

  const loginUser = () => {
    if (!email.trim() || !pass.trim())
      return setError("Both fields should be completed");
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
            placeholder="example@email.com"
            type="email"
            value={email ? email : ""}
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            className="form-control mt-4 w-100"
            placeholder="Password"
            type="password"
            value={pass ? pass : ""}
          />
          <input
            className="btn btn-dark btn-block mt-5 w-100"
            value="Register User"
            type="button"
            onClick={(e) => registerUser(e)}
          />
        </form>
        <button
          className="btn btn-success btn-block mt-1 w-100"
          onClick={loginUser}
        >
          Log In
        </button>
        {error ? <p className="text-danger mt-3">{error}</p> : <span></span>}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
