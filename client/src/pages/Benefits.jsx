import React from 'react'
import download from '../assets/svg/download.svg'
import fav from '../assets/svg/fav.svg'
import preview from '../assets/svg/preview.svg'
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const Benefits = () => {
    return (
        <section className='Benefits flex h-[80vh] flex-col p-20'>
            <div className='flex py-10 gap-5 justify-between items-start'>
                <h1 className='basis-1/2 text-4xl font-semibold heading poppins '>Explore Our Diverse Categories of Stunning Email Templates</h1>
                <p className='basis-1/2'>Discover a wide range of email templates tailored for various purposes, including marketing, transactional, and more. Each template is designed with aesthetics and functionality in mind, ensuring your emails stand out. Download the HTML/CSS code effortlessly to customize your emails to perfection.</p>
            </div>

            <div className='mt-20'>
                <ul className='grid grid-cols-3 gap-10'>
                    <HoverBorderGradient
                        containerClassName="rounded-md"
                        className="p-7"
                    >
                        <li className='flex flex-col gap-5 items-start justify-start'>
                            <img src={download} alt="download" className='w-10' />
                            <h3 className='text-xl font-semibold'>Easily Download HTML/CSS Code for Your Favorite Templates</h3>
                            <p>Get instant access to downloadable code for seamless integration.</p>
                            <button className='hover:border hover:border-white/10 hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-500 p-2 px-4 rounded-md w-fit'>Download →</button>
                        </li>
                    </HoverBorderGradient>

                    <HoverBorderGradient
                        containerClassName="rounded-md"
                        className="p-7"
                    >
                    <li className='flex flex-col gap-5'>
                        <img src={preview} alt="preview" className='w-10' />
                        <h3 className='text-xl font-semibold'>Preview Your Emails Live Before Sending Them Out</h3>
                        <p>Experience real-time previews of your email designs to ensure perfection.</p>
                        <button className='hover:border hover:border-white/10 hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-500 p-2 px-4 rounded-md w-fit'>Preview →</button>
                    </li>
                    </HoverBorderGradient>

                    <HoverBorderGradient
                        containerClassName="rounded-md"
                        className="p-7"
                    >
                    <li className='flex flex-col gap-5'>
                        <img src={fav} alt="fav" className='w-10' />
                        <h3 className='text-xl font-semibold'>Save Your Favorite Templates for Quick Access</h3>
                        <p>Create an account to store and manage your preferred templates.</p>
                        <button className='hover:border hover:border-white/10 hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-500 p-2 px-4 rounded-md w-fit'>Sign Up →</button>
                    </li>
                    </HoverBorderGradient>
                </ul>
            </div>
        </section>
    )
}

export default Benefits
