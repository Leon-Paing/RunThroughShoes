import React,{useState} from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import {motion, AnimatePresence} from "framer-motion";
import { useSelectedCard, useSelectedCardData, useVisible, useWishListData, useCartData } from "../Contexts/ShoeContext";

const PopCard = ({ id, img, title, star,reviews, prevPrice, newPrice, sizes}) => {

    const {visible, setVisible} = useVisible();
    const {selectedCardData} = useSelectedCardData();
    const {wishListData, setWishListData} = useWishListData();
    const {cartData, setCartData} = useCartData();

    const handleAddWishList = (item) => {
        if(!wishListData.some((wish) => wish.id === item.id)){
            setWishListData([...wishListData, item]);
            alert(`${item.title} is added to WishList!`)
        }else{
            alert(`${item.title} is already in Wishlist!`);
        }
    }

    const handleAddCart = (item) =>{
        if(!cartData.some((addedItem) => addedItem.id === item.id)){
            setCartData([...cartData, item]);
            alert(`${item.title} is added to Cart!`)
        }else{
            alert(`${item.title} is already in Cart!`)
        }
    }

    const handleCancelClick = ()=> {
        setVisible(!visible);
    }

    return(
        <AnimatePresence>
        {visible && <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:1}}
            transition={{duration: 0.4}}
            style={styles.overlay}>
            <motion.section
                initial={{scale: 0}}
                animate={{scale: 1}}
                exit={{scale: 0.3}}
                transition={{duration: 0.4}}
                className="card" style={styles.popCard}>
                <p className="x" onClick={handleCancelClick} style={{ fontSize:'1.5rem', cursor: 'pointer'}}>⤬</p>
                <div className="imgdiv">
                    <img className="card-img" src={img} alt="Shoe"/>
                </div>
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <div id="size-container"><span id="size-title">Size:</span>
                        <div id="sizes">{sizes.map((size, index) => 
                        (<div id="size" key={index}>{size}</div>)
                    )}</div>
                    </div>
                        <section className="card-reviews">
                            <span>{star}{star}{star}{star}</span>
                            <span className="total-reviews">{reviews}</span>
                        </section>
                        <section className="card-price">
                            <div className="price">
                                <del>{prevPrice}</del> ${newPrice}
                            </div>

                            <div className="bag">
                                <BsCart4 size={22} className="cart-icon" onClick={()=> handleAddCart(selectedCardData)} />
                                <FaRegHeart onClick={ () => handleAddWishList(selectedCardData)} size={22} className="heart-icon"/>
                            </div>
                        </section>
                    </div>
                </motion.section>
            </motion.div>}
        </AnimatePresence>
    )
}

const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensure the pop-up is on top of everything
    },
    popCard:{
        overflow: 'hidden',
        width: "100%",
        background: 'transparent',
        color: 'white',
        backdropFilter: 'blur(20px)',
        minWidth: '240px',
        maxWidth: '45%',
        minHeight: '350px',
        maxHeight: '350px',
        margin: '20px',
        border: '0.5px solid hsl(190, 100%, 33%)',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 1s ease',
        boxShadow: '0 60px 200px -60px rgb(158, 128, 182)',
        position: 'relative',
        
    }
  };

export default PopCard;