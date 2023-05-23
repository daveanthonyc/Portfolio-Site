import { motion } from 'framer-motion'

export default function Test() {

    return ( 
        <>
            <motion.div className='cover-beige'
                animate={{
                    height: "0px",
                    transition: {
                        duration: 1.9,
                        ease: [.8, .03, -0.05, 0.95]
                    }
                }}
            >
                <motion.div className='cover'
                    animate={{
                        height: "0px",
                        transition: {
                            // animationDelay: "1",
                            duration: 1.6,
                            ease: [.6, .01, -0.05, 0.95]
                        },
                    }}
                >
                    
                    <motion.p
                        animate={{
                            opacity: "0%",
                            transition: {
                                delay: 0.3,
                                duration: 0.4
                            }
                        }}
                    >Welcome</motion.p>
                </motion.div>
            </motion.div>
        </>
     );
}