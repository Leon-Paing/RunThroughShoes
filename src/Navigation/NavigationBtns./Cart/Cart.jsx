import React from "react";
import "./Cart.css";
import {motion} from 'framer-motion';
import { useCartData, useCartDataID, useCartVisible } from "../../../Contexts/ShoeContext";
import CartItem from "./CartItem";

const Cart = ()=> {

    const { setCartVisible} = useCartVisible();
    const {cartData} = useCartData();
    const { setCartDataID} = useCartDataID();

    const handleCart = () => {
        setCartVisible(false);
    }

    return(
        <>
            <div id="CartContainer">
                <motion.div id="cart" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}}>
                    <div id="cartTitle">
                        <h3 id="Titlecart">Shopping Cart</h3>
                        <p onClick={handleCart} id="x" style={{ fontSize:'1.5rem', cursor: 'pointer', position:'sticky', zIndex: 0, top:0}}>⤬</p>
                    </div>

                    {cartData.map((item,index) => (
                         <CartItem key={index} id={item.id} img={item.img} title={item.title} star={item.star} reviews={item.reviews} prevPrice={item.prevPrice} newPrice={item.newPrice} sizes={item.sizes} />)
                    )}
                </motion.div>
            </div>
        </>
    )
}
export default Cart;