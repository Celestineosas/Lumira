import React from 'react'
import { BestSell, BestSell2 } from '../../constants'
import BestSellingCard from '../../components/BestSellingCard/BestSellingCard'
import { motion } from 'framer-motion'

const BestSelling = () => {
    return (
        <section id='women' className='flex flex-col w-full items-center max-container gap-10 '>
            <div className='flex flex-col gap-5 sm:px-14 px-8 sm:py-10 py-6'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='font-nohemi sm:text-[44px] text-[30px] text-center text-[#212e03] font-semibold'>Best Selling Products</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='info-text text-[#212e03]'>Our best-selling skincare products are customer favorites because they deliver visible results, are made with high-quality ingredients, and are trusted for their consistency.</motion.p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-12 sm:px-14 px-8 mb-10'>
                {
                    BestSell.map((item) => (
                        <BestSellingCard key={item.id} {...item} />
                    ))
                }
            </div>
            <div id='men' className='bg-[#facbad] flex sm:px-14 w-full px-8 sm:py-28 py-8 '>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-12'>
                    {
                        BestSell2.map((item) => (
                            <BestSellingCard key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default BestSelling
