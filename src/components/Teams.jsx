import React from 'react'
import Title from './Title'
import {teamData} from '../assets/assets'
import { motion } from 'motion/react'

const Teams = () => {
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
            <Title title='Meet the team' desc='A passionate team of digital expert dedicated to your brand success.'/>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {teamData.map((team,index)=>(
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.15}}
                        viewport={{once: true}}
                        key={index} 
                        className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border dark:shadow-white/5 hover:scale-103 transition-all duration-400'
                    >
                        <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Teams