import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import ContactLogo from '@/Images/svg/Contact_logo.svg'

function GetInTouch() {
    const [screenWidth, setScreenWidth] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenWidth(width);
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth])

    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();

        emailjs.sendForm('service_rw573su', 'template_evakk76', form.current, 'P-iEkMxKB0mab3ulU')
            .then((result) => {
                e.target.reset()
            }, (error) => {

            }).finally(() => setLoading(false))
    };


    return (
        <div className={`w-5/6 md:w-full bg-white rounded-md mt-28 bg-slate mx-auto flex gap-14 mb-24 md:flex-col flex-row items-center justify-evenly py-20 shadow-2xl h-[90vh] md:h-auto`}>
            <div className='flex'>
                <Image
                    className='mx-auto filter w-[40rem] rounded-md saturation-200 brightness-100'
                    width={720}
                    height={1080}
                    priority
                    src="https://i.pinimg.com/originals/38/b1/53/38b1538e3e3c1d3dc6795dc02b180dcb.gif"
                    alt="Travel the world logo"
                />
            </div>
            <div className={`flex flex-col gap-5 items-start ${screenWidth < 1024 ? 'max-w-md mx-auto w-full px-4' : 'lg: px-10'}`}>
                <p className='text-5xl font-semibold text-slate-950'>Get in Touch</p>
                <p className='text-base font-light max-w-md text-slate-950'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                <form ref={form} onSubmit={sendEmail} className={`flex flex-col gap-5 text-lg w-full max-w-md ${screenWidth < 1024 ? 'mx-auto' : ''}`}>
                    <input
                        placeholder='Your Email'
                        name="from_email"
                        className='bg-slate-800 focus:outline-[1px] focus:outline-slate-500 text-slate-200 outline-none p-3 rounded-md ' />

                    <input
                        placeholder='Name'
                        name="from_name"
                        className='bg-slate-800 focus:outline-[1px] focus:outline-slate-500 text-slate-200 outline-none p-3 rounded-md ' />

                    <textarea
                        placeholder='Message'
                        name="message"
                        className='bg-slate-800 focus:outline-[1px] focus:outline-slate-500 text-slate-200 outline-none p-3 rounded-md resize-none'
                        rows={4}
                    />
                    <button type="submit" disabled={loading} className={`px-7 py-2 rounded-md w-max bg-gradient-to-tl text-black text-lg ${loading ? "bg-gray-500" : "bg-gradient-to-br from-purple-700 via-red-600 to-red-500 text-white font-semibold"}`}>Get in Touch</button>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch