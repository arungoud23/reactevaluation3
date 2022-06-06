import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds,setLoginCreds] = useState({});
  const {login} = useContext(AuthContext);
  const handleOnChange=(e) =>{
    const {name,value} = e.target;
    setLoginCreds({
      ...loginCreds,
      [name] :value,
    })
  }
  return (
    <div>
      <input type="text" placeholder="Enter Email" data-cy="login-email" onChange={handleOnChange}/>
      <input type="password" placeholder="Enter Password" data-cy="login-password" onChange={handleOnChange}/>
      <button data-cy="login-submit">submit</button>
    </div>
  );
};

export default Login;
