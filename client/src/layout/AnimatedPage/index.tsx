import React from 'react'
import { motion } from 'framer-motion'


import './style.scss'


const AnimatedPage = (Component: () => React.ReactElement): () => React.ReactElement => {
    const WrappedComponent = (): React.ReactElement => (
        <>
            {/* <motion.div
                key="in"
                className="slide-in"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            > */}
            <Component/>
            {/* </motion.div> */}


            <motion.div
                key="in"
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                key="out"
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )


    return WrappedComponent
}




export default AnimatedPage
