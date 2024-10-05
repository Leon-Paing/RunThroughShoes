import Nav from "./Navigation/Nav";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { ShoeContextProvider, useCartData } from "./Contexts/ShoeContext";
import { AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import {motion} from 'framer-motion';
import "animate.css/animate.compat.css"
import Checkout from "./Checkout/Checkout";
import OrderConfirm from "./OrderConfirm/OrderConfirm";

function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setLoadingComplete(true);
    },3500)
  })

  return (
    <>
    <AnimatePresence>
    {!loadingComplete && (
       <Loading></Loading>)}
    {loadingComplete && (<motion.div initial={{opacity:0.3}} animate={{opacity:1}} transition={{duration:1}}>
    <ShoeContextProvider>
      <Router>    
        <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderConfirm" element={<OrderConfirm/>}/>
        </Routes>
      </Router>
    </ShoeContextProvider>
    </motion.div>)}
    </AnimatePresence>
    </>
  )
}

export default App
