import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNmaeReact ,setBtnNameReact] = useState("Login");
    const data = useContext(UserContext)

    return (
        <div className="flex justify-between bg-blue-100 sm:bg-lime-100 shadow-lg m-4" >
            <div className="w-32" >
               <img src={LOGO_URL}  ></img>
            
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about">Cart</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="px-4" onClick={ () => {
                        btnNmaeReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNmaeReact}</button>
                    <li className="px-4 font-bold text-blue-900">
                    {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;