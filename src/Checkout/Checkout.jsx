import React, { useEffect, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import "./Checkout.css"
import Loading from "../Loading";
import { useCustomerAddress, useCustomerName, useCustomerPhone, useQuantity, useSelectedCartData, useSize } from "../Contexts/ShoeContext";
import NavForSecondary from "../components/navforSecondary";

// Don't forget to decompose into small components for clean code

const Checkout = () => {

    const [loadingComplete, setLoadingComplete] = useState(false);

    const {customerName, setCustomerName} = useCustomerName('');
    const {customerPhone, setCustomerPhone} = useCustomerPhone('');
    const {customerAddress, setCustomerAddress} = useCustomerAddress('');
    const {quantity, setQuantity} = useQuantity(1);
    const {selectedCartData} = useSelectedCartData();
    const {selectedSize, setSelectedSize} = useSize();

    const [localQuantity, setLocalQuantity] = useState(1)
    const [exceedTen, setExceedTen] = useState(false);
    const [lessThanOne, setLessThanOne] = useState(false);
    const [sizeSelected, setSizeSelected] = useState(selectedCartData.sizes[0]);

  useEffect(()=>{
    setQuantity(localQuantity);
    setSelectedSize(sizeSelected);
    setTimeout(()=>{
      setLoadingComplete(true);
    },2000)
  })

  const navigate = useNavigate();

    const handlOrderConfirm = () => {
        navigate('/orderConfirm')
    }

  const handleSelectSize = (size) => {
    setSizeSelected(size)
  }

  const handleAddQuantity = () => {
    if( localQuantity >= 1 && localQuantity <10 ){
        setLocalQuantity(localQuantity+1)
        setLessThanOne(false)
    }  
    else{
        setLocalQuantity(localQuantity)
        setExceedTen(true)
    }
  }
  const handleReduceQuantity = () => {
    if( localQuantity>1 && localQuantity <=10){
        setLocalQuantity(localQuantity - 1)
        setExceedTen(false)
    }
    else{
        setLocalQuantity(localQuantity)
        setLessThanOne(true)
    }
  }

  const handleNameInput = (event) => {
    setCustomerName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setCustomerPhone(event.target.value)
  }

  const handleAddressInput = (event) => {
    setCustomerAddress(event.target.value)
  }

    return(
        <>
        {!loadingComplete && (
            <Loading/>
        )}

        {loadingComplete && (
        <>
       <NavForSecondary/>
        <div id="checkoutbody">
                <div className="order-container">
                    <div className="order-item-detail">
                        <div className="order-item-visual">
                            <div className="order-img-container">
                                <img src={selectedCartData.img} alt="" className="order-img" />
                            </div>
                            <div className="order-item-title">{selectedCartData.title}</div>
                            <div className="order-item-price">${selectedCartData.newPrice}</div>
                        </div>
                        <div className="order-item-size-quantity">
                            <div className="size-container">
                                <div className="size-label">Choose Size</div>
                                <div className="sizes">{selectedCartData.sizes.map((size, index) => 
                                    (<div onClick={()=>handleSelectSize(size)} className={sizeSelected===size? "size-selected": "size"} key={index}>{size}</div>))}
                                </div>
                            </div>
                            <div className="quantity-container">
                                <div className="quantity-label">Quantity</div>
                                <div className="quantity">
                                    <button onClick={handleReduceQuantity} className="reduce-quantity" disabled={lessThanOne}>-</button>
                                    <input type="text" value={quantity} className="quantity-input" readOnly/>
                                    <button onClick={handleAddQuantity} className="add-quantity" disabled={exceedTen}>+</button>
                                </div>
                                <div className="quantity-display">Orders : {quantity}</div>
                            </div>
                        </div>
                    </div>
                    <form className="payment-detail">
                        <div className="payment-label">Payment Details</div>
                        <div className="payment-credentials">
                            <div className="label-credential">Name</div>
                            <div className="credential-input-container">
                                <input onChange={handleNameInput} type="text" className="credential-input" placeholder="Enter your name" required></input>
                            </div>
                        </div>
                        <div className="payment-credentials">
                            <div className="label-credential">Phone Number</div>
                            <div className="credential-input-container">
                                <input onChange={handlePhoneInput} type="text" className="credential-input"  placeholder="Enter your ph.number" required></input>
                            </div>
                        </div>
                        <div className="payment-credentials">
                            <div className="label-credential">Address</div>
                            <div className="credential-input-container">
                                <input onChange={handleAddressInput} type="text" className="credential-input"  placeholder="Enter your address" required></input>
                            </div>
                        </div>
                        <div className="payment-method-container">
                            <input type="checkbox" className="payment-method" name="paymentmethod" defaultChecked/>
                             <label htmlFor="paymentmethod" className="payment-method-label">Cash on delivery</label>
                        </div>
                    </form>
                </div>
            <div className="confirm-home-container">
                <Link to="/"><span id="backHome"> Back to Home</span></Link>
                <button type="submit" className="confirm-button" onClick={handlOrderConfirm} disabled={!customerName||!customerPhone||!customerAddress}>Confirm</button>
            </div>
            
        </div></>)}
    </>
    )
}

export default Checkout;