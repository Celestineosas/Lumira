import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { maskGroup16, maskGroup17, maskGroup18, maskGroup19 } from "../../assets/images";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

const AboutUs2 = () => {
    return (
        <section className="flex flex-col gap-14 sm:px-14 px-8 sm:py-8 py-8 bg-[#ffeee2] w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex md:flex-row flex-col gap-5 w-full '>
                <div className="flex lg:flex-row flex-col gap-2 justify-center items-center border border-[#212e03] px-2 max-md:px-0 py-7 md:w-1/2">
                    <img src={maskGroup18} alt='small' className='sm:w-64 w-72 rounded-3xl' />
                    <div className='flex flex-col gap-5 items-start justify-start'>
                        <div className="flex gap-1 max-lg:px-7 m-2">
                            {[...Array(4)].map((_, i) => (
                                <FaStar key={i} className='text-[#212e03]' />
                            ))}
                            <IoIosStarOutline className='text-[#212e03]' />
                        </div>
                        <p className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-[#212e03] lg:max-w-4xl max-lg:px-7">I love how clean and lightweight the products feel. My skin tone is more even, and my confidence is back.</p>
                        <h4 className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-[#212e03] max-lg:px-7 font-bold">Steph</h4>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-2 justify-center items-center border border-[#212e03] px-2 max-md:px-0 py-7 md:w-1/2">
                    <img src={maskGroup19} alt='small' className='sm:w-64 w-72 rounded-[59px]' />
                    <div className='flex flex-col gap-5 items-start justify-start'>
                        <div className="flex gap-1 max-lg:px-7 m-2">
                            {[...Array(4)].map((_, i) => (
                                <FaStar key={i} className='text-[#212e03]' />
                            ))}
                            <IoIosStarOutline className='text-[#212e03]' />
                        </div>
                        <p className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-[#212e03] lg:max-w-4xl max-lg:px-7">Gentle, effective, and smells amazing! My skin has never felt this soft and hydrated. Highly recommend!</p>
                        <h4 className="font-nohemi sm:text-[18px] text-[15px] leading-normal text-[#212e03] max-lg:px-7 font-bold">Tracy</h4>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
                viewport={{ once: true }}
                className='mt-2 flex justify-center items-center -space-x-1'>
                <Button label="View more" px="px-12" backgroundColor="bg-[#212e03]" text="text-white" />
                <FaArrowRightLong className='w-12 h-12 text-[#212e03] border border-[#212e03] p-3 rounded-[59px]' />
            </motion.div>
        </section>

    )
}

export default AboutUs2
