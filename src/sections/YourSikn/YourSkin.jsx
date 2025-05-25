import React from 'react'
import Button from '../../components/Button/Button'
import { maskGroup2 } from '../../assets/images'
import { forwardArrow } from '../../assets/icons'

const YourSkin = () => {
    return (
        <section className='flex w-full md:flex-row flex-col sm:px-14 px-8 py-12 justify-between gap-16 max-container bg-[#facbad] ' >

            <div className='flex flex-col justify-center w-full gap-6'>
                <h1 className='sm:text-5xl text-3.5xl font-medium font-inter text-[#212e03] max-sm:leading-none'>
                    Your skin<br /> deserves <br /> more than <br /> just moisture.
                </h1>
                <div className='mt-2'>
                    <Button label="Explore" px="px-8" backgroundColor="bg-[#212e03]" text="text-[#facbad]" iconURL={forwardArrow} iconRadius="rounded-full" iconBgColor="bg-[#facbad]" iconColor="text-[#facbad]" iconPadding="p-1" />
                </div>

            </div>

            <div className=''>
                <img
                    src={maskGroup2}
                    alt="mask group"
                    className='sm:h-[450px] sm:w-[700px] w-[350px] h-[250px] object-cover rounded-md relative'

                />
            </div>
        </section >
    )
}

export default YourSkin
