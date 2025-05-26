import React from 'react'
import { maskGroup13, maskGroup14, maskGroup15, maskGroup16, maskGroup17 } from '../../assets/images'
import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id='gift' className="flex flex-col gap-10 sm:px-14 px-8 sm:py-8 py-8 bg-[#212e03] w-full max-container">
            {/* Wrapper that forces right alignment */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-end">
                <div className="flex justify-between items-end py-2 px-5 border sm:w-[450px] w-[350px] border-white rounded-[157px]">
                    <div className="flex -space-x-2 items-center">
                        <img src={maskGroup13} alt="small" className="rounded-full sm:w-15 w-10 max-sm:h-10" />
                        <img src={maskGroup14} alt="small" className="rounded-full sm:w-15 w-10 max-sm:h-10" />
                        <img src={maskGroup15} alt="small" className="rounded-full sm:w-15 w-10 max-sm:h-10" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="sm:text-2xl text-xl font-inter text-white">Over 500k+ Users </h4>
                        <div className="flex gap-1 text-white">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='flex flex-col gap-10 items-center justify-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='font-nohemi sm:text-[44px] text-[30px] text-center text-white font-semibold'> What Our Users Say About Us </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
                    viewport={{ once: true }}
                    className='flex md:flex-row flex-col gap-5 w-full'>
                    <div className="flex lg:flex-row flex-col gap-2 justify-center items-center border border-white px-2 max-md:px-0 py-7 md:w-1/2">
                        <img src={maskGroup16} alt='small' className='sm:w-64 w-72 rounded-3xl' />
                        <div className='flex flex-col gap-5 items-start justify-start'>
                            <div className="flex gap-1 max-lg:px-7 m-2">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} className='text-white' />
                                ))}
                                <IoIosStarOutline className='text-white' />
                            </div>
                            <p className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-white lg:max-w-4xl max-lg:px-7">I’ve struggled with breakouts for years, but this product changed everything. My skin feels smoother, clearer, and more balanced. I’m hooked!</p>
                            <h4 className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-white max-lg:px-7 font-bold">Michael</h4>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-2 justify-center items-center border border-white px-2 max-md:px-0 py-7 md:w-1/2">
                        <img src={maskGroup17} alt='small' className='sm:w-64 w-72 rounded-3xl' />
                        <div className='flex flex-col gap-5 items-start justify-start'>
                            <div className="flex gap-1 max-lg:px-7 m-2">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} className='text-white' />
                                ))}
                                <IoIosStarOutline className='text-white' />
                            </div>
                            <p className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-white lg:max-w-4xl max-lg:px-7">Finally, a skincare brand that delivers real results. My dark spots have visibly faded, and I get compliments on my glow all the time.</p>
                            <h4 className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-white max-lg:px-7 font-bold">Anna</h4>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div></div>
        </section>

    )
}

export default AboutUs
