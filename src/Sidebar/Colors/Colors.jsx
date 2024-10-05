import React, { useState } from "react";
import "./Colors.css";
import useColor, {useCategory, useCompany, usePrice, useWords} from "../../Contexts/ShoeContext";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import {motion} from 'framer-motion';

function Colors(){
    const {selectedColor, setSelectedColor} = useColor("all");
    const [active, setActive] = useState(true);

    const handleColorChange = (event)=>{
        setSelectedColor(event.target.value);
    }

    const [isVisible, setIsVisible] = useState(false);

    const handleColorClick = ()=>{
        setIsVisible(!isVisible)
        setActive(!active)
    }

    return(
        <div className="Color-container">
            <h2 onClick={handleColorClick} id="color"><b>🎨</b>Color
            {active ? (<FaAngleDoubleDown className="arr"/>) :
             (<FaAngleDoubleUp className="arr"/>)}</h2>
            {isVisible &&
            (<motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
                className="colors">
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="all" checked={selectedColor==="all"}/><p id="all"></p>All
                </label>
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="white" checked={selectedColor==="white"}/><p id="white"></p>White
                </label>
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="blue" checked={selectedColor==="blue"}/><p id="blue"></p>Blue
                </label>
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="black" checked={selectedColor==="black"}/><p id="black"></p>Black
                </label>
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="red" checked={selectedColor==="red"}/><p id="red"></p>Red
                </label>
                <label className="color-option-label">
                    <input onChange={handleColorChange} className="radio-color" type="radio" name="color-option" value="green" checked={selectedColor==="green"}/><p id="green"></p>Green
                </label>
                
            </motion.div>)}
        </div>
    )
}

export default Colors;