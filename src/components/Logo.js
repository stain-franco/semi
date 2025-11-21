import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);


const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2x1 font-bold border border-solid border-transparent dark:border-light
        '
        whileHover={{
            backgroundColor: ["#121212", "#29C5F9","#9029F9","#F92967","#F9DF29", "#121212"],
            scale:1.1,
            transition:{duration:1, repeat: Infinity}
        }}
        >RS</MotionLink>
    </div>
  )
}

export default Logo