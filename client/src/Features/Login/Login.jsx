import React, { useRef, useState, useEffect } from "react";
import "./Login.scss";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import useToggle from "../../Hooks/useToggle";

import axios from "../../App/api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      resetUser();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };

  // doctor's form

  const docRef = useRef();
  const errDocRef = useRef();

  const [doc, resetDoc, docAttribs] = useInput("user", "");
  const [pwdDoc, setPwdDoc] = useState("");
  const [errDocMsg, setErrDocMsg] = useState("");
  const [checkDoc, toggleCheckDoc] = useToggle("persist", false);

  useEffect(() => {
    docRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [doc, pwdDoc]);

  const handleSubmitDoctor = async (e) => {
    e.preventDefault();

    try {
      const response = await axios?.post(
        LOGIN_URL,
        JSON.stringify({ doc, pwdDoc }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ doc, pwdDoc, roles, accessToken });
      resetDoc();
      setPwdDoc("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrDocMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrDocMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrDocMsg("Unauthorized");
      } else {
        setErrDocMsg("Login Failed");
      }
      errDocRef?.current?.focus();
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <p
            ref={errRef}
            style={{ color: "red", fontWeight: "bolder" }}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h3>Patient's login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email *"
                id="username"
                ref={userRef}
                autoComplete="off"
                {...userAttribs}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="persistCheck">
              <input
                type="checkbox"
                id="persist"
                onChange={toggleCheck}
                checked={check}
              />
              <label htmlFor="persist">Trust This Device</label>
            </div>
            {/* <div className="form-group">
              <Link to="/forgotPassword" className="ForgetPwd">
                Forget Password?
              </Link>
            </div> */}
            <div className="form-group pt-2">
              <Link to="/register" className="ForgetPwd">
                Not Registered? Click Me.
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-6 login-form-2">
          <p
            style={{ color: "red", fontWeight: "bolder" }}
            ref={errDocRef}
            className={errDocMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errDocMsg}
          </p>
          <h3>Doctor's Login</h3>
          <form onSubmit={handleSubmitDoctor}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email *"
                value=""
                id="username"
                ref={docRef}
                autoComplete="off"
                {...docAttribs}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                id="password"
                onChange={(e) => setPwdDoc(e.target.value)}
                value={pwdDoc}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="persistCheck">
              <input
                type="checkbox"
                id="persist"
                onChange={toggleCheckDoc}
                checked={checkDoc}
              />
              <label
                htmlFor="persist"
                style={{ color: "bold", fontWeight: "bold", color: "white" }}
              >
                Trust This Device
              </label>
            </div>
            {/* <div className="form-group">
              <a href="#" className="ForgetPwd" value="Login">
                Forget Password?
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
