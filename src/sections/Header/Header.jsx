import React from 'react'
import Nav from '../../components/Nav/Nav'
import Button from '../../components/Button/Button'
import { cartSvg } from '../../assets/icons'
import { maskgroup } from '../../constants'



const Header = () => {
  return (
    <section className='flex flex-col w-full bg-[#facbad] max-container'>
      <Nav />
      <div className='flex flex-1 items-center w-full justify-center flex-col max-sm:gap-5 padding sm:mt-14 mt-20'>
        <h1 className='font-nohemi sm:text-[54px] text-[35px] max-lg:text-center text-[#212e03] font-semibold'>LUMIRA Velvet Body Lotion</h1>
        <p className='info-text text-[#212e03]'>A rich, fast-absorbing lotion with shea butter, Vitamin E, and plant collagen. Leaves your skin soft, glowing, and lightly scented with warm vanilla and sandalwood.</p>
        <div className='flex gap-3 sm:mt-20 mt-15'>
          <Button label="Products" text="text-white" size="text-15px" px="px-12" />
          <Button label="Shop now" text="text-[#212e03]" backgroundColor="bg-[#eca980]" border="border" borderColor="border-[#212e03]" iconURL={cartSvg} size="text-15px" px="px-8" />
        </div>
        <div className='flex flex-col justify-center items-center mt-12 gap-7'>
          <p className='bg-[#facbad] text-[#212e03] font-inter text-sm shadow-xl rounded-[82px] p-3'>Dermatologist tested for all skin types</p>
          <div className="grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1 sm:gap-5 gap-7">
            {
              maskgroup.map((item) => (
                <div key={item.id}>
                  <div className='flex flex-1 flex-col w-full max-sm:w-full relative'>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='sm:h-[300px] sm:w-[554px] w-[350px] h-[250px] object-cover rounded-md relative'

                    />
                  </div>
                </div>

              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Header
