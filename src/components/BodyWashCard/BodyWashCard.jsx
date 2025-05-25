import React from 'react'

const BodyWashCard = ({img, alt }) => {
    return (
        <div className='relative flex flex-1 flex-col w-full '>
            <img src={img} alt={alt} width={270} className='relative object-contain object-center w-full' />
            <div className='rounded-[82px] font-inter bg-[#fefdfc] text-[#212e03] px-5 py-2 left-5 bottom-5 absolute'>Add to cart</div>
       
        </div>
    )
}

export default BodyWashCard
