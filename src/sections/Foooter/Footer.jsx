import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <section className='flex flex-col bg-white w-full items-center max-container gap-10 sm:px-14 px-8 sm:py-10 py-6'>
            <div

                className='flex flex-col gap-5 '>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='font-nohemi sm:text-[46px] text-[36px] text-center text-[#212e03] font-semibold'>Your skin deserves premium care</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='info-text text-[#212e03]'>With the right products and consistency, you can cleanse, treat, and protect your skin to reveal its natural glow and strength over time.</motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center relative w-full sm:mt-5 mt-0 max-w-md">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex-1 shadow-xl px-6 py-5 bg-[#212e03] text-white rounded-[82px] focus:bg-[#212e03] focus:outline-none"
                />
                <FaArrowRightLong className='w-[60px] h-[60px] absolute right-0 text-[#212e03] bg-white border border-[#212e03] p-3 rounded-[82px]' />
            </motion.div>

            <ul
                className='grid md:grid-cols-4 grid-cols-2 sm:gap-15 cursor-pointer gap-5 text-[#212e03] w-full text-center font-nohemi sm:mt-36 mt-20'>
                <li>Shop</li>
                <li>Contacts</li>
                <li>Terms and conditions</li>
                <li>Privacy Policy</li>
            </ul>

        </section>
    )
}

export default Footer
