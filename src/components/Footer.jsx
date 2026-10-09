import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className='bg-slate-50 dark:bg-gray-950 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-6 transition-colors'>
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10 pb-12'>
                <div className='space-y-5 text-gray-700 dark:text-gray-400 max-w-lg'>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="Logo" />
                    <p className='max-w-md text-sm sm:text-base leading-relaxed'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <ul className='flex flex-wrap gap-6 sm:gap-8 text-sm font-medium'>
                        <li><a href='#hero' className='hover:text-primary transition-colors'>Home</a></li>
                        <li><a href='#services' className='hover:text-primary transition-colors'>Services</a></li>
                        <li><a href='#our-work' className='hover:text-primary transition-colors'>Our Work</a></li>
                        <li><a href='#contact-us' className='hover:text-primary transition-colors'>Contact Us</a></li>
                    </ul>
                </div>
                
                <div className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold text-gray-800 dark:text-white'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form onSubmit={(e) => e.preventDefault()} className='flex gap-2 text-sm max-w-md'>
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
                            className='w-full p-3 text-sm outline-none rounded-lg dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-600 focus:border-primary transition-colors' 
                            required
                        />
                        <button 
                            type='submit' 
                            className='bg-primary text-white rounded-lg px-6 font-medium hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <hr className='border-gray-300 dark:border-gray-800 my-6' />

            <div className='pb-6 text-sm text-gray-500 dark:text-gray-400 flex justify-between sm:items-center gap-4 max-sm:flex-col'>
                <p>&copy; 2026 agency.ai - All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    <a href="#" className='opacity-70 hover:opacity-100 transition-opacity'><img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5' /></a>
                    <a href="#" className='opacity-70 hover:opacity-100 transition-opacity'><img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5' /></a>
                    <a href="#" className='opacity-70 hover:opacity-100 transition-opacity'><img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5' /></a>
                    <a href="#" className='opacity-70 hover:opacity-100 transition-opacity'><img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer