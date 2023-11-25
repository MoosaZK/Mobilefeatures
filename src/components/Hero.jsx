import heroImage from '../images/hero-light.png' 
import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
  return (
    <div ref={ref} className='w-full mt-20 py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.25}}
            className='flex flex-col justify-center'
            >
                <h3 className='md:text-3xl sm:text-2xl text-xl font-semibold '>Ready to Use Tailwind CSS Web</h3>
                <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold my-2 md:py-6'>Tailwind Template for <span className='text-[#7083F5]'> App & Software </span>Site.</h1>
                <p className='md:text-2xl sm:text-xl  text-gray-400'>All in one Tailwind CSS site template for - <br />
                 App and Software sites Comes with all <br />
                essential components.</p>
                <button className=" bg-[#7083F5] w-[150px] rounded-md font-medium my-4 text-white py-4 hover:bg-[#8697f4]">Sign Up</button>
        
            </motion.div>
            <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.25}}
            
            className='relative w-full mt-10'>
                <div className='absolute rounded-full md:bg-[#7083F5] md:p-64 md:-top-20 md:left-12 -z-10'></div>
                <img className='mx-auto' src={heroImage} alt="" />
            </motion.div>
        
        </div>
    
    </div>
  )
}

export default Hero