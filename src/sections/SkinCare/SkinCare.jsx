import React from 'react'
import Button from '../../components/Button/Button'
import { skinCare } from '../../assets/images'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';


const SkinCare = () => {
    return (
        <section className='padding flex sm:flex-row flex-col items-center justify-center sm:gap-15 gap-7 bg-[#212e03]'>
            <div className='flex flex-col justify-center w-full gap-10'>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='font-inter sm:text-[18px] text-[15px] leading-normal lg:max-w-md text-white'>
                    Skincare is a daily investment in the health and confidence of your skin. It goes beyond beauty — it’s about understanding your skin’s unique needs and giving it the care it deserves. From cleansing and hydrating to treating specific concerns like acne, hyperpigmentation, or aging, a consistent routine can transform your skin over time. With the right blend of quality ingredients and mindful habits, skincare becomes a form of self-care that helps you look and feel your best, every single day.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='mt-2 flex items-center -space-x-1'>
                    <Button label="Read more" px="px-10" backgroundColor="bg-white" text="text-[#212e03]" />
                    <FaArrowRightLong className='w-12 h-12 text-white border border-white p-3 rounded-full' />
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.7 }}
                viewport={{ once: true }}
                className=''>
                <img
                    src={skinCare}
                    alt="Skin Care"
                    className='sm:h-[450px] sm:w-[700px] w-[350px] h-[250px] object-cover rounded-md relative'

                />
            </motion.div>
        </section>
    )
}

export default SkinCare
