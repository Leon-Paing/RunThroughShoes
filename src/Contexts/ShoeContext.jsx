import React, { createContext, useContext, useState } from 'react';

const ShoeContext = createContext();

export const ShoeContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [typeWords, setTypeWords] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [visible, setVisible] = useState(true);
  const [wishListVisible, setWishListVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [wishListData, setWishListData] = useState([]);
  const [wishListDataID, setWishListDataID] = useState(null);
  const [selectedWishListData, setSelectedWishListData] = useState(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartDataID, setCartDataID] = useState(null);
  const [selectedCartData, setSelectedCartData] = useState();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [customerAddress, setCustomerAddress] = useState();


  return (
    <ShoeContext.Provider value={{
      selectedCategory,
      setSelectedCategory,
      selectedPrice,
      setSelectedPrice,
      selectedColor,
      setSelectedColor,
      typeWords,
      setTypeWords,
      selectedCompany,
      setSelectedCompany,
      visible,
      setVisible,
      wishListVisible,
      setWishListVisible,
      selectedCard, 
      setSelectedCard,
      selectedCardData,
      setSelectedCardData,
      wishListData,
      setWishListData,
      wishListDataID,
      setWishListDataID,
      selectedWishListData,
      setSelectedWishListData,
      cartVisible,
      setCartVisible,
      cartData,
      setCartData,
      cartDataID,
      setCartDataID,
      selectedCartData, 
      setSelectedCartData,
      customerName, 
      setCustomerName,
      customerPhone, 
      setCustomerPhone,
      customerAddress,
      setCustomerAddress,
      quantity,
      setQuantity,
      selectedSize,
      setSelectedSize,
    }}>
      {children}
    </ShoeContext.Provider>
  );
};

export const useCategory = () => {
  const { selectedCategory, setSelectedCategory } = useContext(ShoeContext);
  return { selectedCategory, setSelectedCategory };
};

export const usePrice = () => {
  const { selectedPrice, setSelectedPrice} = useContext(ShoeContext);
  return { selectedPrice, setSelectedPrice };
};

const useColor= ()=>{
    const {selectedColor, setSelectedColor} = useContext(ShoeContext);
    return {selectedColor, setSelectedColor};
}

export const useWords = () =>{
  const {typeWords, setTypeWords} = useContext(ShoeContext);
  return {typeWords, setTypeWords};
}

export const useCompany = () => {
  const {selectedCompany, setSelectedCompany} = useContext(ShoeContext);
  return {selectedCompany, setSelectedCompany};
}

export const useVisible = () => {
  const {visible, setVisible} = useContext(ShoeContext);
  return {visible, setVisible};
}

export const useWishListVisible = () => {
  const {wishListVisible, setWishListVisible} = useContext(ShoeContext);
  return {wishListVisible, setWishListVisible};
}

export const useSelectedCard = () => {
  const {selectedCard, setSelectedCard} = useContext(ShoeContext);
  return {selectedCard, setSelectedCard};
}

export const useSelectedCardData = () => {
  const {selectedCardData, setSelectedCardData} = useContext(ShoeContext);
  return {selectedCardData, setSelectedCardData};
}

export const useWishListData = () => {
  const {wishListData, setWishListData} = useContext(ShoeContext);
  return {wishListData, setWishListData};
}

export const useWishListDataID = () => {
  const {wishListDataID, setWishListDataID} = useContext(ShoeContext);
  return {wishListDataID, setWishListDataID}; 
}

export const useSelectedWishListData = () => {
  const {selectedWishListData, setSelectedWishListData} = useContext(ShoeContext);
  return {selectedWishListData, setSelectedWishListData};
}

export const useCartVisible = () => {
  const {cartVisible, setCartVisible} = useContext(ShoeContext);
  return {cartVisible, setCartVisible};
}

export const useCartData = () =>{
  const {cartData, setCartData} = useContext(ShoeContext);
  return {cartData, setCartData};
}

export const useCartDataID = () =>{
  const {cartDataID, setCartDataID} = useContext(ShoeContext);
  return {cartDataID, setCartDataID};
}

export const useSelectedCartData = () => {
  const {selectedCartData, setSelectedCartData} = useContext(ShoeContext);
  return {selectedCartData, setSelectedCartData};
}

export const useCustomerName = () =>{
  const {customerName, setCustomerName} = useContext(ShoeContext);
  return {customerName, setCustomerName};
}

export const useCustomerPhone = () =>{
  const {customerPhone, setCustomerPhone} = useContext(ShoeContext);
  return {customerPhone, setCustomerPhone};
}

export const useCustomerAddress = () =>{
  const {customerAddress, setCustomerAddress} = useContext(ShoeContext);
  return {customerAddress, setCustomerAddress};
}

export const useQuantity = () => {
  const {quantity, setQuantity} = useContext(ShoeContext);
  return {quantity, setQuantity};
}

export const useSize = () => {
  const {selectedSize, setSelectedSize} = useContext(ShoeContext);
  return {selectedSize, setSelectedSize};
}


export default useColor;