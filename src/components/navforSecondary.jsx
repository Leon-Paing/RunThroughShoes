import React from "react";
import { Link } from "react-router-dom";

const NavForSecondary = () => {

    return(
        <nav className="order-navbar">
            <div className="pagename">
            <Link to="/"><img src="./src/Navigation/pagename.png" alt="logo"/></Link>
            </div>
        </nav>
    )
}
export default NavForSecondary;