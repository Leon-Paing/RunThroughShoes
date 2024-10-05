import React,{useState} from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import PopCard from "./PopCard";
import { useSelectedCardData, useWishListData } from "../Contexts/ShoeContext";
import data from "../db/data";


const Card = ({id, img, title, star,reviews, prevPrice, newPrice, company, color, category, isSelected, onClick})=>{
    
    const {wishListData, setWishListData} = useWishListData();

    const handleAddWishList = (item) => {
        if(!wishListData.some((wish) => wish.id === item.id)){
            setWishListData([...wishListData, item]);
            alert(`${item.title} is added to WishList!`)
        }else{
            alert(`${item.title} is already in Wishlist!`);
        }
    }


    return(
        
        <section className="card" onClick={onClick}>
            <div className="imgdiv">
                <img className="card-img" src={img} alt="Shoe"/>
            </div>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        <span>{star}{star}{star}{star}</span>
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> ${newPrice}
                        </div>

                        <div className="bag">
                        </div>
                    </section>
                </div>

            </section>
    )
}

export default Card;