import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { setUserInfo } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setUserInfo({ userName, password });
  };

  return (
    <>
      <div>
        <label>Username :-</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label>Password :-</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
