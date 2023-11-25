import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import appstore from '../images/appstore-svgrepo-com.svg'
const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
  return (
   <div id='features' ref={ref} className='w-full py-16 px-4'>
    {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> */}
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
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Amazing features for to make your work easier</h1>
            <p className=' my-3 md:text-2xl sm:text-xl font-semibold  text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In convallis tortor eros. Donec vitae
                tortor lacus. Phasellus aliquam ante in maximus.</p>
        </motion.div>
        <motion.div
                    variants={{
                        hidden: {opacity: 0, y:75},
                        visible: {opacity:1, y:0}
                    }}  
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration:0.5,delay:0.25}}
        className='grid border-2 rounded-md border-blue-100 py-5'>
                <div className='grid md:grid-cols-3 gap-5'>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>
                    <motion.div 
                        variants={{
                            hidden: {opacity: 0, y:75},
                            visible: {opacity:1, y:0}
                        }}  
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5,delay:0.55}}
                    className='text-center flex flex-col items-center'>
                        <div className='p-5 rounded-xl bg-[#F8F9FF] w-20 h-20 my-2' >
                            <img src={appstore} alt="" /> 
                        </div>
                    <h4 className='font-semibold my-3 text-xl'>Crafted for App Landing</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. In convallis tortor.</p>
                    </motion.div>

                </div>
        </motion.div>

    </div>

   </div>
  )
}

export default Features