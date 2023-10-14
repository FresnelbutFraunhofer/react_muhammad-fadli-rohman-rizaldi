import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: "admin", password: "password123" };
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      nav("/home");
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      window.location.reload();
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="contain">
      <div className="login-container">
        <h2>Login</h2>
        <div className="user-login">
          <p className="text-start mb-0">username: admin</p>
          <p className="text-start mb-0">password: password123</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>{errorMessage}</p>
          <button className="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
