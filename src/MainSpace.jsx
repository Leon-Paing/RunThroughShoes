import React from "react";
import './MainSpace.css'
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import { AnimatePresence } from "framer-motion";


function MainSpace(){
    return(

        <div className="mainspace" style={{position:'relative'}}>
            <Recommended/>
            <Products/>
        </div>
    )
}

export default MainSpace;