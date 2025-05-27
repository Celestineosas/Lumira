import React from 'react'
import Button from '../../components/Button/Button'
import { motion } from 'framer-motion'

const WhyChoose = () => {
    return (
        <section className='flex flex-col padding w-full items-center max-container bg-[#212e03] gap-10 '>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-col'>
                <h1 className='font-nohemi sm:text-[44px] text-[30px] text-center text-white font-semibold'>Why Choose LUMIRA</h1>
                <p className='font-inter sm:text-[15px] text-[12px] -mt-1 leading-normal text-center lg:max-w-4xl text-white'>Simple, Easy-to-use, Classy, Luxurious, Soft, Tender-on-skin.</p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
                viewport={{ once: true }}
                className='info-text text-white'>LUMIRA Velvet Body Lotion is crafted with a blend of nourishing shea butter, Vitamin E, and plant collagen — designed to hydrate deeply, absorb quickly, and leave your skin feeling like silk. No greasiness. No harsh ingredients. Just clean, luxurious care for all skin types.</motion.p>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.85 }}
                viewport={{ once: true }}
                className='flex gap-3 sm:mt-16 sm:mb-7 mt-10 font-semibold'>
                <Button label="Our Mission" text="text-[#212e03]" backgroundColor="bg-[#facbad]" px="px-10" size="text-[20px]" font="font-nohemi"/>
                <Button label="Our Vision" text="text-white" border="border" borderColor="border-white" px="px-10" size="text-[20px]" font="font-nohemi" />
            </motion.div>
        </section>
    )
}

export default WhyChoose
