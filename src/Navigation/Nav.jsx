import React,{useEffect} from "react";
import "./Nav.css"
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { TiUserOutline } from "react-icons/ti";
import useColor, { useCartVisible, useCategory, useCompany, usePrice, useVisible, useWishListVisible, useWords } from "../Contexts/ShoeContext";
import WishList from "./NavigationBtns./WishList/Wishlist";
import Cart from "./NavigationBtns./Cart/Cart";



function Nav(){

    const {selectedCategory, setSelectedCategory} = useCategory();
    const {selectedPrice, setSelectedPrice} = usePrice();
    const {selectedColor, setSelectedColor} = useColor();
    const {typeWords, setTypeWords} = useWords('');
    const {selectedCompany, setSelectedCompany} = useCompany();
    const {wishListVisible, setWishListVisible} = useWishListVisible();
    const {cartVisible, setCartVisible} = useCartVisible();
        
        const handleTypedWords = (event) => {
            setTypeWords((event.target.value).toLocaleLowerCase().trim().replace(/ +/g,""));
            setSelectedCategory('all');
            setSelectedPrice('all');
            setSelectedColor('all');
            setSelectedCompany('all')
        }

        const handleWishList = () => {
            setWishListVisible(true);
        }

        const handleCart = () => {
            setCartVisible(true);
        }

    return(
        <>
        <nav>
            <div className="nav-container">
                <input onChange={handleTypedWords} type="text" className="search-input" placeholder="Search with Name(e.g Nike).."/>
            </div>

            <div className="pagename">
                <img src="./src/Navigation/pagename.png" alt="logo"/>
            </div>

            <div className="profile-container"> 
                <a>
                    <FaRegHeart onClick={handleWishList} className="nav-icons"/>
                </a>
                <a>
                    <TiShoppingCart onClick={handleCart} className="nav-icons"/>
                </a>
            </div>
        </nav>
        {wishListVisible &&(
            <WishList/>
        )
        }
        {cartVisible && (
            <Cart/>
        )}</>
    )
}

export default Nav;