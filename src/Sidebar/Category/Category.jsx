import React, { useState } from "react";
import "./Category.css";
import useColor, {useCategory, usePrice} from "../../Contexts/ShoeContext";
import { useRef } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import 'animate.css';
import {motion} from'framer-motion';

function Category(){
    const {selectedCategory, setSelectedCategory} = useCategory("all");
    const [active, setActive] = useState(true);
        
    
    const handleCategoryChange = (event)=>{
        setSelectedCategory(event.target.value);   
    }

    const [isVisible, setIsVisible] = useState(false);

    const handleCategoryClick = ()=>{
        setIsVisible(!isVisible)
        setActive(!active)
    }


    return(
        <motion.div className="Category-container">
            <h2 onClick={handleCategoryClick} id="category"><b>📁</b>Category 
             {active ? (<FaAngleDoubleDown className="arr"/>) :
             (<FaAngleDoubleUp className="arr"/>)}
            </h2>
            {isVisible && (
            <motion.div
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: 2}}
             className="categories" >
                <label className="category-option-label">
                    <input onChange={handleCategoryChange} className="radio-category" type="radio" name="category-option" value="all" checked={selectedCategory==="all"}/>All
                </label>
                <label className="category-option-label">
                    <input onChange={handleCategoryChange} className="radio-category" type="radio" name="category-option" value="sneakers" checked={selectedCategory==="sneakers"}/>Sneakers
                </label>
                <label className="category-option-label">
                    <input onChange={handleCategoryChange} className="radio-category" type="radio" name="category-option" value="flats" checked={selectedCategory==="flats"}/>Flats
                </label>
                <label className="category-option-label">
                    <input onChange={handleCategoryChange} className="radio-category" type="radio" name="category-option" value="sandals" checked={selectedCategory==="sandals"}/>Sandals
                </label>
                <label className="category-option-label">
                    <input onChange={handleCategoryChange} className="radio-category" type="radio" name="category-option" value="heels" checked={selectedCategory==="heels"}/>Heels
                </label>
            </motion.div>)}
        </motion.div>
    )
}

export default Category; 