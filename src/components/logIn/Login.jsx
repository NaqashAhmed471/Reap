import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../Services/ApiService";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await ApiService.post("/users/login/", input);
    if (resp.data?.msg === "Login Success") {
      localStorage.setItem("token", resp.data.access);
      localStorage.setItem("refresh", resp.data.refresh);
      navigate("/tasks");
    }
  };

  return (
    <div className=" bg-light">
      <div className="row vh-100 min-h align-items-center">
        <div className="col h-100 d-none d-md-inline">
          <img
            className="img-fluid image"
            src="https://source.unsplash.com/m2Wd_bTUSGw/640x958"
            alt="login page"
          ></img>
        </div>
        <div className="col">
          <form
            className="w-50 p-4 mx-auto shadow rounded"
            onSubmit={handleSubmit}
          >
            <h3 className="mb-4 text-center">Login to Crawl Reap!</h3>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <hr className="mb-3" />
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-normal">
                Email or Username
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="email"
                placeholder="Email or username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="form-label fw-normal">
                Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <Link to="#" className=" d-block mb-4 text-end small">
              Forgot password?
            </Link>
            <button type="submit" className="btn btn-outline-primary btn-block">
              Login
            </button>
            <button
              //   onClick={setGuest}
              className="btn btn-outline-primary btn-block"
            >
              Login As Guest
            </button>
            <p className="line my-3">or</p>
            <p className="small text-center">
              Don't have an account yet?
              <Link to="/register"> Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
