import React from "react";
import { useCartData, useSelectedWishListData, useWishListData, useWishListDataID, useWishListVisible } from "../../../Contexts/ShoeContext";
import './Wishlist.css'
import {motion} from 'framer-motion';
import Wishlistitem from "./WishlistItem";

const WishList = () => {

    const { setWishListVisible} = useWishListVisible();
    const {wishListData, setWishListData} = useWishListData();

    const handleWishlist=()=> {
        setWishListVisible(false);
    }

    return(
        <>
            <div id="wishListContainer">
                <motion.div id="wishList" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}}>
                    <div id="wishListTitle">
                        <h3 id="Title">Wishlist</h3>
                        <p onClick={handleWishlist} id="x" style={{ fontSize:'1.5rem', cursor: 'pointer', position:'sticky', zIndex: 0, top:0}}>⤬</p>
                    </div>
                   
                    {wishListData.map((item,index) => (
                         <Wishlistitem key={index} id={item.id} img={item.img} title={item.title} star={item.star} reviews={item.reviews} prevPrice={item.prevPrice} newPrice={item.newPrice} sizes={item.sizes} />)
                    )}
                </motion.div>
            </div>
        </>
    )
}
export default WishList;