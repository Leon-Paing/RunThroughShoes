import React from "react";
import "./Recommended.css";
import useColor, { useCategory, useCompany, usePrice, useWords } from "../Contexts/ShoeContext";


function Recommended(){

    const {selectedCategory, setSelectedCategory} = useCategory();
    const {selectedPrice, setSelectedPrice} = usePrice();
    const {selectedColor, setSelectedColor} = useColor();
    const {typeWords, setTypeWords} = useWords();
    const {selectedCompany, setSelectedCompany} = useCompany();

    const handleBtnChange = (event) => {
        event.preventDefault();
        setSelectedCategory('all');
        setSelectedPrice('all');
        setSelectedColor('all');
        setTypeWords('');
        setSelectedCompany((event.target.value).toLocaleLowerCase().trim());
    }

    return(
        <>
            <div className="recommended-flex">
                <h2 className="recommended-title">Available Items</h2>
                <div className="recommended-btns">
                    <button onClick={handleBtnChange} className="company-btns" value="all">All Products</button>
                    <button onClick={handleBtnChange} className="company-btns" value="nike">Nike</button>
                    <button onClick={handleBtnChange} className="company-btns" value="adidas">Adidas</button>
                    <button onClick={handleBtnChange} className="company-btns" value="puma">Puma</button>
                    <button onClick={handleBtnChange} className="company-btns" value="vans">Vans</button>
                </div>
            </div>
        </>
    )
}

export default Recommended;