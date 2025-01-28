import React from 'react'
import { templates } from '../utils/dummyTem'
import { PinContainer } from '../components/ui/3d-pin';

const Features = () => {
    // console.log(templates[0])
    const template = templates.find(t => t.id === 7);
    console.log(template);
    return (
        <section className='features h-[80vh] my-5 flex justify-center items-center gap-2 px-20 mb-14'>

            <div className='basis-1/2 h-full flex flex-col gap-7 justify-center px-5'>
                <h1 className=' text-5xl font-semibold heading poppins '>
                    Unlock Your Email Design Potential Today
                </h1>
                <p>Discover a curated collection of stunning email templates designed for every purpose. Easily customize and elevate your email campaigns with our user-friendly platform.</p>
                <div className='flex '>
                    <div className='pr-24'>
                        <h4 className='text-xl font-semibold'>Pre-Designed</h4>
                        <p>Choose from a variety of templates tailored to your marketing needs.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>Downloadable Code</h4>
                        <p>Access HTML/CSS code for seamless integration into your projects.</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <button className='p-2 my-7 border border-white/10 rounded-md bg-white text-black hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-700 px-4'>Explore</button>
                    <button className='hover:border hover:border-white/10 hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-500 p-2 px-4 rounded-md'>Preview →</button>
                </div>
            </div>



            <div className='template basis-1/2'>

                <PinContainer
                    title={template?.name || 'Template not found'}
                    href="https://niraaj10.github.io/N10/"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[40rem] ">
                        <h1 className="text-xl font-bold">
                            {template?.name || 'Template not found'} 
                        </h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: template?.html || '<p>No content available</p>',
                            }}
                            className="p-4 bg-black"
                        />

                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>

            </div>
        </section>
    )
}

export default Features
