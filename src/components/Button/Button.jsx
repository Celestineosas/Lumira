import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ label, backgroundColor, text, iconURL, border, borderColor, py, px, size, iconRadius, iconColor, iconBgColor, iconPadding, font }) => {
  return (
    <motion.button className={` flex justify-center cursor-pointer items-center whitespace-nowrap rounded-[82px] leading-none
        ${backgroundColor ? `${backgroundColor}` : "bg-[#212e05]"} 
        ${text ? `${text}` : "text-black"}
        ${border ? `${border}` : ""}
        ${borderColor ? `${borderColor}` : ""}
        ${py ? `${py}` : "py-4"}
        ${px ? `${px}` : "px-5"}
        ${size ? `${size}` : "text-[18px]"}
        ${font ? `${font}` : "font-inter"}
    `}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {label}
      {
        iconURL && <img src={iconURL} alt='Arrow' className={`ml-3 w-6 h-6
      ${iconRadius ? iconRadius : ""}
      ${iconColor ? iconColor : ""}
      ${iconBgColor ? iconBgColor : ""}
      ${iconPadding ? iconPadding : ""}

      `} />
      }
    </motion.button>
  )
}

export default Button
