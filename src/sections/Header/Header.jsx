import React from 'react'
import Nav from '../../components/Nav/Nav'
import Button from '../../components/Button/Button'
import { cartSvg } from '../../assets/icons'
import { maskgroup } from '../../constants'
import { motion } from 'framer-motion'



const Header = () => {
  return (
    <section className='flex flex-col w-full bg-[#ffeee2] max-container'>
      <Nav />
      <div className='flex flex-1 items-center w-full justify-center flex-col max-sm:gap-5 sm:px-14 px-8 sm:pt-20 py-12 sm:mt-16 mt-24'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
          viewport={{ once: true }}
          className='font-nohemi sm:text-[54px] text-[35px] max-lg:text-center text-[#212e03] font-semibold'>LUMIRA Velvet Body Lotion</motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
          viewport={{ once: true }}
          className='info-text text-[#212e03]'>A rich, fast-absorbing lotion with shea butter, Vitamin E, and plant collagen. Leaves your skin soft, glowing, and lightly scented with warm vanilla and sandalwood.</motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 1.5 }}
          viewport={{ once: true }}
          className='flex gap-3 sm:mt-20 mt-15'>
          <Button label="Products" text="text-white" size="text-15px" px="px-12" />
          <Button label="Shop now" text="text-[#212e03]" backgroundColor="bg-[#facbad]" border="border" borderColor="border-[#212e03]" iconURL={cartSvg} size="text-15px" px="px-8" />
        </motion.div>
        <div className='flex flex-col justify-center items-center mt-5 gap-7'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
            viewport={{ once: true }}
            className='bg-[#ffeee2] text-[#212e03] font-inter text-sm shadow-xl rounded-[82px] p-3'>Dermatologist tested for all skin types</motion.p>
          <div className="grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 sm:gap-5 gap-7">
            {
              maskgroup.map((item) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.id }}
                  viewport={{ once: true }}
                  
                >

                  <div className='flex flex-1 flex-col w-full max-sm:w-full relative'>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='sm:h-[300px] sm:w-[554px] w-[350px] h-[250px] object-cover rounded-md relative'

                    />
                  </div>
                </motion.div>

              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Header
