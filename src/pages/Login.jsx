import "../styles.css";
import Button from "../components/Button";
import TextField from "../components/TextField";
import loginlogo from "../assets/kv-login.jpeg";
import kvlogo from "../assets/kv-logo.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginFocus = useRef();

  const handleLogin = () => {
    localStorage.setItem("token", true);
    navigate("/employees");
  };

  const handleUsername = (text) => {
    if (text.length <= 5) {
      setUsername(text);
      setError("");
    } else setError("Username Length Exceeded");
  };

  const handlePassWord = (text) => {
    if (text.length <= 5) {
      setPassword(text);
      setError("");
    } else setError("Password Length Exceeded");
  };

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  useEffect(() => loginFocus.current.focus());

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/employees");
  }, []);

  return (
    <main className="loginmain">
      <div className="hero">
        <div className="wrapper-hero">
          <img src={loginlogo} alt="Login Image" className="login-image" />
        </div>
      </div>
      <div className="login">
        <form onClick={(e) => e.preventDefault()}>
          <img src={kvlogo} alt="Logo" className="logo" />
          <TextField
            label="Username"
            id="uname"
            type="text"
            handleSubmit={handleUsername}
            value={username}
            ref={loginFocus}
          />
          <TextField
            label="Password"
            id="password"
            type="password"
            handleSubmit={handlePassWord}
            value={password}
            error={error}
          />
          <Button
            text="Log In"
            className="loginbutton"
            handleSubmit={handleLogin}
          />
        </form>
      </div>
    </main>
  );
};
export default Login;
