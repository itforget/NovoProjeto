import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
 initial: { opacity: 0, x: '-100%' },
 enter: { opacity: 1, x: '0%' },
 exit: { opacity: 0, x: '100%' },
};

const getVariants = (transition) => {
 switch (transition) {
    case 'slide':
      return pageVariants;
    case 'fade':
      return {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      };
    case 'scale':
      return {
        initial: { scale: 0.5 },
        enter: { scale: 1 },
        exit: { scale: 0.5 },
      };
    default:
      return pageVariants;
 }
};

export default function slidingPage({ children, transition = 'slide' }) {
 const variants = getVariants(transition);

 return (
    <AnimatePresence>
      <motion.div
        key="page"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
 );
}