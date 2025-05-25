import React from 'react'

const Button = ({label, backgroundColor, text, iconURL, border, borderColor, py, px, size, iconRadius, iconColor, iconBgColor, iconPadding}) => {
  return (
    <button className={` flex justify-center cursor-pointer items-center whitespace-nowrap rounded-[82px]  leading-none font-inter
        ${backgroundColor ? `${backgroundColor}`: "bg-[#212e05]"} 
        ${text ? `${text}`: "text-black"}
        ${border ? `${border}`: ""}
        ${borderColor ? `${borderColor}`: ""}
        ${py ? `${py}`: "py-4"}
        ${px ? `${px}`: "px-5"}
        ${size ? `${size}`: "text-[18px]"}
    `}>
     {label}
     {
    iconURL && <img src={iconURL} alt='Arrow'  className={`ml-3 w-6 h-6
      ${iconRadius ? iconRadius : ""}
      ${iconColor ? iconColor : ""}
      ${iconBgColor ? iconBgColor : ""}
      ${iconPadding ? iconPadding : ""}

      `} />
     }
    </button>
  )
}

export default Button
