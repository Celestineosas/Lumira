import React from 'react'
import Button from '../../components/Button/Button'
import { maskGroup2 } from '../../assets/images'
import { forwardArrow } from '../../assets/icons'
import { motion } from 'framer-motion'

const YourSkin = () => {
    return (
        <section className='flex w-full md:flex-row flex-col sm:px-14 px-8 py-12 justify-between gap-16 max-container bg-[#ffeee2] ' >

            <div className='flex flex-col justify-center w-full gap-6'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='sm:text-5xl text-3.5xl sm:font-semibold font-medium sm:font-inter font-nohemi  text-[#212e03] max-sm:leading-none'>
                    Your skin<br /> deserves <br /> more than <br /> just moisture.
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
                    viewport={{ once: true }}
                    className='mt-2 font-medium'>
                    <Button label="Explore" px="px-10" backgroundColor="bg-[#212e03]" text="text-white" iconURL={forwardArrow} iconRadius="rounded-full" iconBgColor="bg-white" iconColor="text-[#facbad]" iconPadding="p-1" />
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.85 }}
                viewport={{ once: true }}
                className=''>
                <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={maskGroup2}
                    alt="mask group"
                    className='sm:h-[450px] sm:w-[700px] w-[350px] h-[250px] object-cover rounded-md relative'

                />
            </motion.div>
        </section >
    )
}

export default YourSkin
