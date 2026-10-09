import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {
    const servicesData = [
        {
            title: 'Adventising',
            description: 'we turn bold ideas into powerful digital solution that connect, engage....',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you excute your plane and deliver result.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives result.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'we help you build a strong social media presence and engage with your audiens.',
            icon: assets.social_icon
        },
    ]
    return (
    <div>
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <motion.img
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                viewport={{once: true}}
                src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' 
            />
            
            <Title 
                 title='How can we help?' 
                 desc='From strategy to execution, we craft digital solution that move your business forward.' 
             />
             
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {servicesData.map((service, index) =>
                    <ServiceCard key={index} service={service} index={index} />
                )}
            </div>
        </div>
    </div>
    )
}
export default Services