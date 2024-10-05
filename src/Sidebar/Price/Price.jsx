import React, { useState } from "react";
import "./Price.css";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import useColor, {useCategory, useCompany, usePrice, useWords} from "../../Contexts/ShoeContext";
import {motion} from 'framer-motion';

function Price(){

    const {selectedPrice, setSelectedPrice} = usePrice();
    const [active, setActive] = useState(true);


    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
      };

      const [isVisible, setIsVisible] = useState(false);

      const handlePriceClick = ()=>{
          setIsVisible(!isVisible)
          setActive(!active)
      }

    return(
        <div className="Price-container">
            <h2 onClick={handlePriceClick} id="price"><b style={{color: "green"}}>$</b>Price
            {active ? (<FaAngleDoubleDown className="arr"/>) :
             (<FaAngleDoubleUp className="arr"/>)}</h2>
            { isVisible && (<motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 2}}className="prices">
                                    <label className="price-option-label">
                                        <input onChange={handlePriceChange} className="radios" type="radio" name="price-option" value="all" checked={selectedPrice === 'all'}/>All
                                    </label>
                                    <label className="price-option-label">
                                        <input onChange={handlePriceChange} className="radios" type="radio" name="price-option" value="0-50" checked={selectedPrice === "0-50"}/>$0 - $50
                                    </label>
                                    <label className="price-option-label">
                                        <input onChange={handlePriceChange} className="radios" type="radio" name="price-option" value="51-100" checked={selectedPrice === "51-100"}/>$50 - $100
                                    </label>
                                    <label className="price-option-label">
                                        <input onChange={handlePriceChange} className="radios" type="radio" name="price-option" value="101-150" checked={selectedPrice === "101-150"}/>$100 - $150
                                    </label>
                                    <label className="price-option-label">
                                        <input onChange={handlePriceChange} className="radios" type="radio" name="price-option" value="151-999999" checked={selectedPrice === "151-999999"}/>Over $150
                                    </label>
                            </motion.div>)}
        </div>
    )

}

export default Price;