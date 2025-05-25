import React from 'react'
import Button from '../../components/Button/Button'

const WhyChoose = () => {
    return (
        <section className='flex flex-col padding w-full items-center max-container bg-[#212e03] gap-10 '>
            <div className='flex flex-col'>
                <h1 className='font-nohemi sm:text-[44px] text-[30px] text-center text-[#facbad] font-semibold'>Why Choose LUMIRA</h1>
                <p className='font-inter sm:text-[15px] text-[12px] -mt-1 leading-normal text-center lg:max-w-4xl text-[#facbad]'>Simple, Easy-to-use, Classy, Luxurious, Soft, Tender-on-skin.</p>
            </div>
            
            <p className='info-text text-[#facbad]'>LUMIRA Velvet Body Lotion is crafted with a blend of nourishing shea butter, Vitamin E, and plant collagen — designed to hydrate deeply, absorb quickly, and leave your skin feeling like silk. No greasiness. No harsh ingredients. Just clean, luxurious care for all skin types.</p>
            <div className='flex gap-3 sm:mt-15 mt-10'>
                <Button label="Our Mission" text="text-[#212e03]" backgroundColor="bg-[#facbad]" px="px-10"/>
                <Button label="Our Vision" text="text-[#facbad]" border="border" borderColor="border-[#facbad]" px="px-10" />
            </div>
        </section>
    )
}

export default WhyChoose
