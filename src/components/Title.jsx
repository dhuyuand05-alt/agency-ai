import React from 'react'
import { motion } from 'motion/react'

const Title = ({ title, desc }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
            className='flex flex-col items-center justify-center text-center mb-12'
        >
            <h2 className='text-3xl sm:text-5xl font-medium dark:text-white mb-3'>
                {title}
            </h2>
            <p className='max-w-lg text-gray-500 dark:text-white/75'>
                {desc}
            </p>
        </motion.div>
    )
}
export default Title