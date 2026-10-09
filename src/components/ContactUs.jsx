import React, { useState, useRef } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
    const [namePos, setNamePos] = useState({ x: 0, y: 0 });
    const [nameVisible, setNameVisible] = useState(false);
    const nameRef = useRef(null);

    const [emailPos, setEmailPos] = useState({ x: 0, y: 0 });
    const [emailVisible, setEmailVisible] = useState(false);
    const emailRef = useRef(null);

    const [msgPos, setMsgPos] = useState({ x: 0, y: 0 });
    const [msgVisible, setMsgVisible] = useState(false);
    const msgRef = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleMouseMove = (e, ref, setPos) => {
        if (!ref.current) return;
        const bounds = ref.current.getBoundingClientRect();
        setPos({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const toastId = toast.loading('Sending message...');

        const formData = new FormData(event.target);
        formData.append("access_key", "51e031bf-f8e0-4100-b889-c4842bf4aeea");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form submitted successfully!", { id: toastId });
                event.target.reset();
            } else {
                toast.error(data.message || "Something went wrong!", { id: toastId });
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.", { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
            
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div 
                        ref={nameRef}
                        onMouseMove={(e) => handleMouseMove(e, nameRef, setNamePos)}
                        onMouseEnter={() => setNameVisible(true)}
                        onMouseLeave={() => setNameVisible(false)}
                        className='relative overflow-hidden flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300'
                    >
                        <div 
                            className={`pointer-events-none absolute -z-10 w-40 h-40 rounded-full bg-linear-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-xl transition-opacity duration-500 ${nameVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ top: namePos.y - 80, left: namePos.x - 80 }}
                        />
                        <img src={assets.person_icon} alt="" className='w-4 h-4 opacity-60' />
                        <input type="text" placeholder='Enter your name' name='name' className='w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email ID</p>
                    <div 
                        ref={emailRef}
                        onMouseMove={(e) => handleMouseMove(e, emailRef, setEmailPos)}
                        onMouseEnter={() => setEmailVisible(true)}
                        onMouseLeave={() => setEmailVisible(false)}
                        className='relative overflow-hidden flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300'
                    >
                        <div 
                            className={`pointer-events-none absolute -z-10 w-40 h-40 rounded-full bg-linear-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-xl transition-opacity duration-500 ${emailVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ top: emailPos.y - 80, left: emailPos.x - 80 }}
                        />
                        <img src={assets.email_icon} alt="" className='w-4 h-4 opacity-60' />
                        <input type="email" placeholder='Enter your email' name='email' className='w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <div 
                        ref={msgRef}
                        onMouseMove={(e) => handleMouseMove(e, msgRef, setMsgPos)}
                        onMouseEnter={() => setMsgVisible(true)}
                        onMouseLeave={() => setMsgVisible(false)}
                        className='relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300'
                    >
                        <div 
                            className={`pointer-events-none absolute -z-10 w-48 h-48 rounded-full bg-linear-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-xl transition-opacity duration-500 ${msgVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ top: msgPos.y - 96, left: msgPos.x - 96 }}
                        />
                        <textarea rows={6} placeholder='Enter your message' name='message' className='w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none' required></textarea>
                    </div>
                </div>

                <div className='sm:col-span-2 flex justify-center mt-2'>
                    <button 
                        type='submit' 
                        disabled={isSubmitting}
                        className='w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all disabled:opacity-50'
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'} <img src={assets.arrow_icon} alt="" className='w-4'/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs