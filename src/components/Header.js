import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";
const Header = () => {
    const [btnNmaeReact ,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo" >
               <img src={LOGO_URL}  ></img>
            
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={ () => {
                        btnNmaeReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNmaeReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;