import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const SupportForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
  return (
   <div id='form' ref={ref} className='w-full py-16 '>
    <div className='max-w-[1240px] mx-auto flex flex-col'>
        <motion.div 
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.25}}
        className='text-center'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Let's Stay Connected</h1>
            <p className=' my-3 md:text-2xl sm:text-xl font-semibold  text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
        </motion.div>
        <motion.div
                    variants={{
                        hidden: {opacity: 0, y:75},
                        visible: {opacity:1, y:0}
                    }}  
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration:0.5,delay:0.25}}
        className='border-2 bg-[#FAFBFC] mt-10 rounded-md border-blue-100 py-5'>
                
            <form>
                <div className='w-full flex flex-col md:flex-row items-center mx-auto md:justify-center'>
                    <input
                        className='border-2 rounded-md border-blue-100 py-5 px-16 md:mr-24 bg-white mb-3 md:mb-0 ' type='text' placeholder='Enter your name'/>
                    <input className='border-2 rounded-md border-blue-100 py-5 px-16 bg-white' type='text' placeholder='Company (optional)' />
                </div>
                <div className='w-full flex flex-col md:flex-row items-center mx-auto md:justify-center my-8'>
                    <input
                        className='border-2 rounded-md border-blue-100 py-5 px-16 md:mr-24 bg-white mb-3 md:mb-0 ' type='email' placeholder='Enter your Email'/>
                    <input className='border-2 rounded-md border-blue-100 py-5 px-16 bg-white' type='password' placeholder='Enter you Phone Number' />
                </div>
                <div className='w-full mx-auto flex flex-col items-center'>
                    <textarea className='border-2   rounded-md border-blue-100 py-5 md:px-16 bg-white mb-3 md:mb-0 ' name="" id="" cols="30" rows="10"></textarea>
                    <button className=" bg-[#7083F5] w-[150px] rounded-md font-medium my-10 mx-auto text-white py-4 hover:bg-[#8697f4]">Contact Us</button>
                </div>
        
          </form>
        </motion.div>

    </div>

   </div>
  )
}

export default SupportForm