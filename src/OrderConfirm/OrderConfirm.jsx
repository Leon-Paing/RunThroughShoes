import React, { useEffect, useState } from 'react';
import './OrderConfirm.css';
import Loading from "../Loading";
import {Link, useNavigate} from 'react-router-dom';
import { GiConfirmed } from "react-icons/gi";
import NavForSecondary from '../components/navforSecondary';
import { useQuantity, useSelectedCartData, useSize } from '../Contexts/ShoeContext';

const OrderConfirm = () => {

    const [loadingComplete, setLoadingComplete] = useState(false);
    const [orderNumber, setOrderNumber] = useState()

    const {selectedCartData} = useSelectedCartData();
    const {selectedSize,setSelectedSize} = useSize();
    const {quantity} = useQuantity();

    const sizeforItem = selectedCartData.sizes[0];

    const numbers = [1,2,3,4,5,6,7,8,9];
    const resultIndexofNumbers = Math.floor(Math.random()*numbers.length);
    const resultNumber = numbers[resultIndexofNumbers];

    const periods = ["Days", "Weeks"];
    const resultIndexofPeriods = Math.floor(Math.random()*periods.length);
    const resultperiod= periods[resultIndexofPeriods];
    
    const waitingTime = `${String(resultNumber)+" "+resultperiod}`;


    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const orderNoArray = [...numbers,...characters];
    const orderNo = [];
    const orderNoLength = 6;

    useEffect(()=>{

        if(selectedSize===null){
            setSelectedSize(sizeforItem);
        }else{
            setSelectedSize(selectedSize);
        }
        setTimeout(()=>{
          setLoadingComplete(true);
        },2000)
      })


      const handleOrderNo = () => {
        for (let i = 0; i<orderNoLength; i++) {
            const randomIndex = Math.floor(Math.random() * orderNoArray.length);
            orderNo.push(orderNoArray[randomIndex]);
            }
        setOrderNumber(orderNo.join(''));
        }

    return(
        <>
        {!loadingComplete && (
            <Loading/>
        )}

        {loadingComplete && (
            <>
            <NavForSecondary/>    
            <div className="order-confirmed-container" onLoad={handleOrderNo}>
                <div className="order-confirmed-label">
                    <span>Order Confirmed</span><span className="order-confirmed-icon">&nbsp;<GiConfirmed/></span>
                </div>
                <div className="order-confirmed-details">
                    <div className="order-confirmed-visual">
                        <div className="order-confirmed-img-container">
                            <img src={selectedCartData.img} alt="" className="order-confirmed-img" />
                        </div>
                        <div className="order-confirmed-title">{selectedCartData.title}</div>
                        <div className="order-comfirmed-infos">
                            <div className="order-confirm-info">
                                <div className="left-div">Size</div>
                                <div className="right-div">{selectedSize}</div>
                            </div>
                            <div className="order-confirm-info">
                                <div className="left-div">Quantity</div>
                                <div className="right-div">{quantity}</div>
                            </div>
                            <div className="order-confirm-info">
                                <div className="left-div">Order-No</div>
                                <div className="right-div"><b>{orderNumber}</b></div>
                            </div>
                            <div className="order-confirm-info">
                                <div className="left-div">Payment</div>
                                <div className="right-div">Cash on Delivery</div>
                            </div>
                            <div className="order-confirm-info">
                                <div className="left-div">Waiting Time</div>
                                <div className="right-div">{waitingTime}</div>
                            </div>
                            <div className="order-confirm-info">
                                <div className="left-div"><b>Total</b></div>
                                <div className="right-div"><b>${selectedCartData.newPrice * quantity}</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="go-to-home-link">
                        <Link to='/'><span id='backHome'>Go Back to Home Page</span></Link>
                    </div>
            </div>
            </>
        )}</>
    )
}

export default OrderConfirm;