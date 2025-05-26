import React from 'react'
import { love } from '../../assets/icons'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { motion } from 'framer-motion';

const BestSellingCard = ({ label, price, alt, img, id }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
            className='relative flex flex-1 flex-col w-full  max-sm:mx-auto max-sm:w-[300px]'>
            <img src={img} alt={alt} width={270} className='relative object-contain object-center w-full rounded-3xl' />
            <CiHeart className='absolute border border-gray-500 rounded-full p-1 w-11 h-11 m-5 right-0 top-0' />
            <div className='gap-2 flex flex-col justify-center p-3 bg-[#212e03] rounded-b-3xl absolute sm:-bottom-12 bottom-0 w-full'>
                <h1 className='text-white font-inter font-light text-lg'>{label}</h1>
                <div className='flex gap-1 text-white'>
                    {[...Array(5)].map((_, i) => (
                        <FaStar />
                    ))}

                </div>
                <div className='flex w-full justify-between'>
                    <h3 className="font-inter text-white text-md">${price}</h3>
                    <FaShoppingCart className='w-5 text-white mt-1' />
                </div>
            </div>
        </motion.div>
    )
}

export default BestSellingCard
