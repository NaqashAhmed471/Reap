import React, { useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../Services/ApiService";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    country: "",
    zip: "",
    city: "",
    first_name: "",
    last_name: "",
    dob: "",
    address: "",
    title: "user",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // handle radio button please...
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setisPending(true);
    const payload = {
      country: input.country,
      zip: input.zip,
      city: input.city,
      first_name: input.first_name,
      last_name: input.last_name,
      dob: input.dob,
      address: input.address,
      title: "user",
      user: {
        username: input.username,
        email: input.email,
        password: input.password1,
        password2: input.password2,
      },
    };

    const resp = await ApiService.post("users/signup/", payload);
    if (resp.data?.msg?.user?.email === payload.user.email) {
      console.log("successsssssssssss");
      navigate("/login");
    } else {
      swal(
        `${Object.keys(resp.data?.msg?.user)[0]}: ${
          Object.values(resp.data?.msg?.user)[0]
        }`,
        {
          icon: "warning",
        }
      );
      //   setError(resp.data?.msg?.user);
      console.log("resp.data?.msg", Object.values(resp.data?.msg.user)[0]);
    }
  };

  return (
    <div className="container ">
      <form
        className="m-2 m-lg-5 p-3 shadow border rounded"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center">Register form</h4>
        <hr />
        {error.length > 0 && (
          <div className="error-wrapper">
            <div className="alert alert-danger" role="alert">
              <ul>
                {error.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
            <hr />
          </div>
        )}

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="password1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                    name="password1"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="password2" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                DOB
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label htmlFor="city" className="form-label">
                  city
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="zip" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Gender
              </label>
              <div className="row">
                <div className="col-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="exampleRadios2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="text-center">
          {isPending ? (
            <button
              className="btn btn-primary w-50 mb-3"
              type="button"
              disabled
            >
              Submiting
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button type="submit" className="btn btn-primary w-50 mb-3">
              Submit
            </button>
          )}
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
