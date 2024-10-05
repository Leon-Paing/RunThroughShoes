import React from "react";
import './Loading.css';
import {AnimatePresence, motion} from 'framer-motion';

const Loading= () => {

    return(
        <>
        <AnimatePresence>
            <div className="loadingContainer">
                <motion.div className="loadAnimation"
                            initial={{opacity:1}}
                            animate={{opacity:0.3}}
                            transition={{duration:1, ease: "easeInOut", repeat: Infinity}}>
                    <img src="/logowebbg.png" alt="animation"/>
                </motion.div>
            </div>
        </AnimatePresence>
        </>
    )
}

export default Loading;