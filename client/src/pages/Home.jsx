import React from 'react'
import { HoverBorderGradient } from '../components/ui/hover-border-gradient'
import ex from '../assets/ex.png'
import { ContainerScroll } from '../components/ui/container-scroll-animation'


const Home = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center'>

            {/* <div>
                <HoverBorderGradient
                    containerClassName="rounded-lg"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 pb-6"
                >

                    <span>Aceternity UI</span>
                    <div className=' pb-7'>
                        here is something new comming
                    </div>
                </HoverBorderGradient>
            </div> */}

            <div className="flex flex-col overflow-hidden w-full">
                <ContainerScroll
                    titleComponent={
                        <>
                            {/* <h1 className="heading poppins text-4xl font-extrabold  text-black dark:text-white pb-4">
                            Elevate Your Email Marketing with <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                 Stunning Templates
                                </span>
                            </h1> */}
                            <div className=' w-[65vw] p-8 flex flex-col items-center'>
                                <h1 className='heading poppins font-extrabold text-center hover:cursor-text leading-[65px] py-5 text-[60px]'>Elevate Your Email Marketing with Stunning Templates</h1>
                                <p className='poppins font-semibold w-[55vw] text-center'>Discover a curated collection of beautiful email templates designed for every purpose. Whether you're a developer or a marketer, our templates will help you create engaging emails that captivate your audience.</p>
                                <button className='p-2 my-7 border border-white/10 rounded-md bg-white text-black hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-700 px-5'>Explore → </button>
                            </div>
                        </>
                    }
                >
                    <img
                        src={ex}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    )
}

export default Home
