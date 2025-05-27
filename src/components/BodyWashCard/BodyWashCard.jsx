import React from 'react'
import { motion } from 'framer-motion'

const BodyWashCard = ({ img, alt, id }) => {
    return (
        <motion.div

            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
            viewport={{ once: true }}

            className='relative flex flex-1 flex-col w-full '>
            <img src={img} alt={alt} width={270} className='relative object-contain object-center w-full' />
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className='rounded-[82px] cursor-pointer opacity-65 hover:opacity-100 font-inter bg-[#fefdfc] text-[#212e03] px-5 py-2 left-5 bottom-5 absolute'>Add to cart</motion.div>

        </motion.div>
    )
}

export default BodyWashCard
