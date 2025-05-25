import React from 'react'
import { BestSell2, bodyWash, bodyWash2 } from '../../constants'
import BodyWashCard from '../../components/BodyWashCard/BodyWashCard'

const BodyContent = () => {
    return (
        <section id='body' className='flex flex-col w-full gap=5'>
            <div className='flex flex-col'>
                <div className='flex items-center justify-center mt-5 p-5 text-black font-nohemi bg-[#d9d9d9] text-lg font-semibold'>Body Wash</div>
                <div className='sm:px-14 px-8 sm:py-14 py-8 '>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-10  '>
                        {
                            bodyWash.map((item) => (
                                <BodyWashCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center justify-center mt-5 p-5 text-black font-nohemi bg-[#d9d9d9] text-lg font-semibold'>Body and face Lotions</div>
                <div className='sm:px-14 px-8 sm:pt-14 py-8 '>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 max-lg:gap-10  '>
                        {
                            bodyWash2.map((item) => (
                                <BodyWashCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BodyContent
