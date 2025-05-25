import React from 'react'
import { BestSell, BestSell2 } from '../../constants'
import BestSellingCard from '../../components/BestSellingCard/BestSellingCard'

const BestSelling = () => {
    return (
        <section id='women' className='flex flex-col  w-full items-center max-container gap-10 '>
            <div className='flex flex-col gap-5 sm:px-14 px-8 sm:py-10 py-6'>
                <h1 className='font-nohemi sm:text-[44px] text-[30px] text-center text-[#212e03] font-semibold'>Best Selling Products</h1>
                <p className='info-text text-[#212e03]'>Our best-selling skincare products are customer favorites because they deliver visible results, are made with high-quality ingredients, and are trusted for their consistency.</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-20 sm:px-14 px-8 mb-10'>
                {
                    BestSell.map((item) => (
                        <BestSellingCard key={item.id} {...item} />
                    ))
                }
            </div>
            <div id='men' className='bg-[#facbad] sm:px-14 px-8 sm:py-28 py-8 '>
             <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-20  '>
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
