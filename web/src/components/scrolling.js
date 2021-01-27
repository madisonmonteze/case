import React, { useRef, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Scroller({ children, color }) {
    const controls = useAnimation();
    const ref = useRef();
    const [inViewRef, inView] = useInView();
  
    const setRefs = useCallback(
      (node) => {
        ref.current = node;
        inViewRef(node);
      },
      [inViewRef]
    );
  
    useEffect(() => {
      if (!ref || !ref.current) {
        return;
      }
  
      if (inView) {
        controls.start("visible");
  
        const navbar = document.querySelector(".navbar");
        const currentColor = ref.current.getAttribute("data-color");
        navbar.style.background = currentColor;
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={setRefs}
        data-color={color}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <div className="scroller">
          {children}
        </div>
      </motion.div>
    );
  }

  export default Scroller;