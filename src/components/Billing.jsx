import React from 'react';
import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="products" className={`${layout.sectionReverse}`}>

      {/* left part - image */}
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      {/* right part - title + content */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className='hidden sm:block' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        {/* button apple store and google play store */}
        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer  hover:shadow-sm hover:shadow-white rounded-md' />

          <img src={google} alt='google_play_store' className='w-[128px] h-[42px] object-contain cursor-pointer  hover:shadow-sm hover:shadow-white rounded-md' />
        </div>
      </div>

    </section>
  )
}

export default Billing