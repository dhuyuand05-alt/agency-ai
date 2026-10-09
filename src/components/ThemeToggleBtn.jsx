import React, { useEffect } from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react'

const ThemeToggleBtn = ({ theme, setTheme }) => {
    
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!theme) {
            setTheme(localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light'));
        }
    }, []);

    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (theme) {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <>
            <button className="cursor-pointer">
                {theme === 'dark' ? (
                    <img 
                        onClick={() => setTheme('light')} 
                        src={assets.sun_icon} 
                        className='w-8.5 p-1.5 border border-gray-500 rounded-full' 
                        alt="Sun Icon" 
                    />
                ) : (
                    <img 
                        onClick={() => setTheme('dark')} 
                        src={assets.moon_icon} 
                        className='w-8.5 p-1.5 border border-gray-500 rounded-full' 
                        alt="Moon Icon" 
                    />
                )}
            </button>
        </>
    );
};

export default ThemeToggleBtn;