import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"
// import {AuthContext} from './context/AuthContext'
//import Login from "./pages/Login"
// import Login from "../pages/Login";

// use react-router Link or NavLink
// const Link = <a />;
let count = 0;
const Navbar = () => {
  const {isAuth,login,logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const  handleOnClick = () =>{
    if(isAuth){
      logout();
    }else{
      navigate("/Login")
    }
       
  }
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button onClick={handleOnClick} data-cy="navbar-login-logout-button">{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
