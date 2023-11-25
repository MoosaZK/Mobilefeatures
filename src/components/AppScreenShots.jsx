import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import MobileFrame from '../images/mobile-frame.png'
import Screen1 from '../images/screen-1-light.png'
import Screen2 from '../images/screen-2-light.png'
import Screen3 from '../images/screen-3-light.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppScreenShots = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div ref={ref} className='w-full mx-auto py-16 px-4 text-center'>
        <div className='max-w-[1240px] m-auto flex flex-col'>
        <motion.div
        variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity:1, y:0}
        }}  
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.55}}
        >
         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>App Screenshots</h1>
            <p className='md:text-2xl sm:text-xl my-5 font-semibold text-gray-400'>All in one Tailwind CSS site template for - <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>

        </motion.div>
        
        <motion.div
        
        variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity:1, y:0}
        }}  
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,delay:0.55}} className=' relative m-auto w-3/4'>
            {/* <div className='absolute top-20 w-72 z-10'>
                <img src={MobileFrame} alt="" />
            </div> */}
            <div
            className='mt-20'>
                <Slider {...settings}>
                    <div>
                        <img src={Screen1} alt="" />
                    </div>
                    <div>
                    <img src={Screen2} alt="" />
                        </div>
                    <div>

                    <img src={Screen3} alt="" />
                    </div>
                </Slider>
            </div>

        </motion.div>
     </div>
   </div>
  )
}

export default AppScreenShots