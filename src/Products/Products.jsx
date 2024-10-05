import React, {useState } from "react";
import "./Products.css";
import data from "../db/data";
import Card from "../components/Card";
import useColor, {useCategory, useCompany, usePrice, useSelectedCard, useSelectedCardData, useVisible, useWords} from "../Contexts/ShoeContext";
import PopCard from "../components/PopCard";
import {AnimatePresence, motion, useVelocity} from "framer-motion";

function Products(){

  const {selectedCard, setSelectedCard} = useSelectedCard();
  const {selectedCardData, setSelectedCardData} = useSelectedCardData();
  const {visible, setVisible} = useVisible();


  const handleCardClick = (index) => {
    setSelectedCard(index+1);
    setSelectedCardData(filteredData[index]);
    setVisible(true);
  };

    const {selectedCategory} = useCategory();
    const {selectedPrice} = usePrice();
    const {selectedColor} = useColor();
    const {typeWords} = useWords();
    const {selectedCompany} = useCompany();


    const getPriceRange = (range) => {
        switch (range) {
          case '0-50':
            return [0, 50];
          case '51-100':
            return [51, 100];
          case '101-150':
            return [101, 150];
          case '151-999999':
            return [151, 999999];
          default:
            return [0, Infinity];
        }
      };

      const [minPrice, maxPrice] = getPriceRange(selectedPrice);

    const filteredData = data.filter((item)=> {
                         const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
                         const priceMatch = item.newPrice === "all" || item.newPrice >= minPrice && item.newPrice <= maxPrice
                         const colorMatch = selectedColor === "all" || item.color === selectedColor 
                         const wordMatch = typeWords === '' || ((item.title).toLocaleLowerCase().trim().replace(/ +/g,"")).includes(typeWords)
                         const companyMatch = selectedCompany === "all" || (item.company).toLocaleLowerCase() === selectedCompany

                         return categoryMatch && priceMatch && colorMatch && wordMatch && companyMatch
                        })



    return(
      <>
        <motion.section initial={{scale: 0}}
                        animate={{scale: 1}}  
                        transition = {{duration: 0.7}}
                        className="card-container">
        { filteredData.length > 0 ? (
            filteredData.map((item,index) => (
                <Card key={index} id={item.id} img={item.img} title={item.title} star={item.star} reviews={item.reviews} prevPrice={item.prevPrice} newPrice={item.newPrice} isSelected={selectedCard === index+1} onClick={() => handleCardClick(index)}/>
            ))): (<p style={{color: "white", display:"flex", textAlign: "center"}}>No data found</p>)
            }
            
        </motion.section>
        {
          selectedCard && selectedCardData && visible &&(
            <PopCard key={selectedCard} id={selectedCardData.id} img={selectedCardData.img} title={selectedCardData.title} star={selectedCardData.star} reviews={selectedCardData.reviews} newPrice={selectedCardData.newPrice} prevPrice={selectedCardData.prevPrice} sizes={selectedCardData.sizes}/>
          )
        }
    </>
    )

}
export default Products;