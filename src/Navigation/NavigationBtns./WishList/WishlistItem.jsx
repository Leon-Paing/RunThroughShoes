import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import "./WishlistItem.css"
import { useCartData, useSelectedWishListData, useWishListData, useWishListDataID} from "../../../Contexts/ShoeContext";

const Wishlistitem = ({ id, img, title, star, reviews, prevPrice, newPrice, sizes}) => {

    const {wishListData, setWishListData} = useWishListData();
    const {wishListDataID, setWishListDataID} = useWishListDataID();
    const {selectedWishListData, setSelectedWishListData} = useSelectedWishListData();
    const {cartData, setCartData} = useCartData();
    
    const handleWishListDataID = (id)=> {
        setWishListDataID(id);
        const [selectedItem] = wishListData.filter((wish)=> wish.id === id);
        setSelectedWishListData(selectedItem);
        };

    const handleReomveWishList = (id) => {
        setWishListData(wishListData.filter((wish) => wish.id !== id))
        alert("Item removed from WishList!")
    }

    const handleAddToCart = (item) => {
        if(!cartData.some((cartItem)=> cartItem.id === item.id)){
            setCartData([...cartData, item])
            alert(`${item.title} is added to Cart!`)
        }else{
            alert(`${item.title} is already in Cart!`)
        }
    }
    

    return(
        <>
        <section id="card" onMouseEnter={()=> handleWishListDataID(id)} onClick={()=> handleWishListDataID(id)} onTouchStart={()=> handleWishListDataID(id)}>
            <div id="imgdiv">
                <img id="card-img" src={img} alt="Shoe"/>
            </div>
            <div id="card-details">
                <h3 id="card-title">{title}</h3>
                <div id="size-container"><span id="size-title">Size:</span>
                        <div id="sizes">{sizes.map((size, index) => 
                        (<div id="size" key={index}>{size}</div>)
                    )}</div>
                </div>
                    <section id="card-reviews">
                        <span>{star}{star}{star}{star}</span>
                        <span id="total-reviews">{reviews}</span>
                    </section>
                    <section id="card-price">
                        <div id="item-price">
                            <del>{prevPrice}</del> ${newPrice}
                        </div>

                        <div id="bag" >
                            <BsCart4 size={22} id="cart-icon"
                            onClick={()=> handleAddToCart(selectedWishListData)}  />
                            <FaHeart onClick={()=> handleReomveWishList(wishListDataID)} size={22} id="heart-icon"/>
                        </div>
                    </section>
            </div>
            </section>
        </>
    )
}

export default Wishlistitem;