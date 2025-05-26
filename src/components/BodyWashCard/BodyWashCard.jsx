import React from 'react'
import { motion } from 'framer-motion'

const BodyWashCard = ({ img, alt, id }) => {
    return (
        <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}

            className='relative flex flex-1 flex-col w-full '>
            <img src={img} alt={alt} width={270} className='relative object-contain object-center w-full' />
            <div className='rounded-[82px] font-inter bg-[#fefdfc] text-[#212e03] px-5 py-2 left-5 bottom-5 absolute'>Add to cart</div>

        </motion.div>
    )
}

export default BodyWashCard
