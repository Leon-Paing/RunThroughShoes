import React, { useState, useEffect } from "react";
import "./Body.css"
import Sidebar from "./Sidebar/Sidebar";
import MainSpace from "./MainSpace";
import { AnimatePresence } from "framer-motion";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Nav from "./Navigation/Nav";

function Body(){

    const [sideBarVisibility, setSideBarVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 740);

    const showSideBar = () => {
        if (isSmallScreen) setSideBarVisibility(true);
    };

    const hideSideBar = () => {
        if (isSmallScreen) setSideBarVisibility(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 740);
            if (window.innerWidth > 740) {
                setSideBarVisibility(true);
            } else {
                setSideBarVisibility(false); 
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
        <Nav/>
        <div className="bd">
            <div id="sidebarshowcontainer" onClick={showSideBar} style={{ display: sideBarVisibility || !isSmallScreen ? "none" : "flex" }}>
                <IoArrowForwardCircleOutline id="showSideBar" />
            </div>

            <div id="hidesidebarcontainer" onClick={hideSideBar} style={{ display: !sideBarVisibility || !isSmallScreen ? "none" : "flex" }}>
                <p id="hidesidebar">⤬</p>
            </div>
            
            <Sidebar className="sidebar" style={{ display: sideBarVisibility ? "flex" : "none" }} />
            <MainSpace className="mainspace" />
        </div>
        </>
    );
}

export default Body;