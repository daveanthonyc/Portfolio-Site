// import { motion, useScroll, useTransform } from "framer-motion";

// function Test2() {
//     const { scrollYProgress } = useScroll();
//     const translateX = useTransform(scrollYProgress, [0,1], ["0vw", "10vw"])

//     return ( 
//         <motion.div style={{x: translateX}}>
//             <h1 className='heading-1'>
//                 <span className='heading-accent'>. Hi there.</span>Hi there.<span className='heading-accent'> G'day.</span>
//             </h1> 
//         </motion.div>
//      );
// }

// export default Test2;

import { motion, useScroll, useTransform } from "framer-motion";

function Test2() {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], ["0vw", "10vw"])

  return (
    <motion.div
      style={{ x: translateX }}
    >
      <h1 className="heading-1">
        <span className="heading-accent">. Hi there.</span>Hi there.
        <span className="heading-accent"> G'day.</span>
      </h1>
    </motion.div>
  );
}

export default Test2;