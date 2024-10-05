import React from "react";
import './CartItem.css';
import {useNavigate} from 'react-router-dom';
import { useCartData, useCartDataID, useSelectedCartData } from "../../../Contexts/ShoeContext";
import { MdArrowOutward } from "react-icons/md";

const CartItem = ({id, img, title, star, reviews, prevPrice, newPrice, sizes}) => {

    const {cartData, setCartData} = useCartData();
    const {cartDataID, setCartDataID} = useCartDataID();
    const {selectedCartData, setSelectedCartData} = useSelectedCartData();
    const navigate = useNavigate();

    const handleCheckout = () => {
    navigate('/checkout');
    };

    const handleCartDataID =(id) => {
        setCartDataID(id);
        const [selectedData] = cartData.filter((cartItem) => cartItem.id === id);
        setSelectedCartData(selectedData);
    }

    const handleRemoveItemCart = (id) => {
        setCartData(cartData.filter((cartItem) => cartItem.id !== id))
        alert("Item removed from Cart!")
    }
    
    return(
        <section id="card" onMouseEnter={()=> handleCartDataID(id)} onClick={()=> handleCartDataID(id)} onTouchStart={() => handleCartDataID(id)}>
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

                      <div className="btns">
                        <button className="remove_from_cart" onClick={()=> handleRemoveItemCart(cartDataID)}>Remove</button>
                        <button onClick={handleCheckout} className="checkOut">Check Out&nbsp;<MdArrowOutward/></button>
                      </div>
                    </section>
            </div>

            </section>
    )
} 

export default CartItem;