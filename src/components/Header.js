import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNmaeReact ,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo" >
               <img src={LOGO_URL}  ></img>
            
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                        <Link to="/about">About Us</Link>
                    </li>
                    <li> 
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/about">Cart</Link>
                    </li>
                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login-btn" onClick={ () => {
                        btnNmaeReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNmaeReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;