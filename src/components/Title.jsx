import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div className='flex flex-col items-center justify-center text-center mb-12'>
            <h2 className='text-3xl sm:text-5xl font-medium dark:text-white mb-3'>
                {title}
            </h2>
            <p className='max-w-lg text-gray-500 dark:text-white/75'>
                {desc}
            </p>
        </div>
    )
}

export default Title