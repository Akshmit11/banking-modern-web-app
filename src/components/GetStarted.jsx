import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  transition ease-in-out delay-150 hover:scale-110 duration-300 group`}>
      <div className={`${styles.flexCenter} flex-col  bg-primary  w-[100%] h-[100%] rounded-full`}>

        {/* get + arrow */}
        <div className={`${styles.flexStart} flex-row `}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2 '>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="ArrowUp" className='w-[23px] h-[23px] object-contain transition ease-in-out delay-150 group-hover:-translate-y-2 group-hover:translate-x-2' />
        </div>

        {/* started text */}
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>

      </div>
    </div>
  )
}

export default GetStarted