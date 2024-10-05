import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import { FaArrowLeft } from "react-icons/fa6";

const Sidebar = ({style}) => {
    return(
        <>
        <div className="sidebar" style={style}>
            <Category/>
            <Price/>
            <Colors/>
        </div>
        </>
    )
}

export default Sidebar;