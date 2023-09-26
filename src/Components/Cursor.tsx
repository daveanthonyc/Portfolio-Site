import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Cursor({cursorVariant, backgroundState}: {cursorVariant: any, backgroundState: string}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x-15,
      y: mousePosition.y-15
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x-30,
      y: mousePosition.y-30,
      backgroundColor: "#d1c9bc",
      opacity: 0.5
    }
  }

  return <motion.div className="mouse-cursor" data-state={backgroundState}
    variants={variants}
    animate={cursorVariant}
    transition={{
      duration: 1,
      ease: [0.3, 1.4, 0.3, 1]
    }}
  />;
}
