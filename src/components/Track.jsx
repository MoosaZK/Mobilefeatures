import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import TrackImg from '../images/about-1-light.png'
const Track = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
  return (
    <div id='track' ref={ref} className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <motion.div variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.55}}>

            <img className='mx-auto' src={TrackImg} alt="" />
            </motion.div>
            <motion.div 
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.55}}className=' mx-8'>
                <h3 className='md:text-2xl sm:text-xl text-2xl font-semibold text-[#7083F5] mt-10'>Track Audience Activites</h3>
                <h1 className='my-3 md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Track Your Audience Activites</h1>
                <p className='md:text-xl sm:text-xl mb-5 text-gray-400'>
                Schedule your posts for times when your audience is <br />
most active. Choose from our best-time predictions, or <br />
create your own publishing schedule.</p>

                <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity:1, y:0}
                }}  
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5,delay:0.55}} className='flex'>
                    <div  className='w-50'>
                        <h1 className=' md:text-3xl sm:text-2xl text-xl border rounded-full p-5'>01</h1>
                    </div>
                    <div
                    className='flex flex-col ml-10'>
                        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold '>Lorem ipsum dolor.</h1>
                        <p className='md:text-xl  text-lg mb-5 text-gray-400'>
                        Schedule your posts for times when.</p>
                    </div>
                </motion.div>

                <motion.div
                 variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity:1, y:0}
                }}  
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5,delay:0.55}}
                 className='flex  mt-6'>
                    <div className='w-50'>
                        <h1 className=' md:text-3xl sm:text-2xl text-xl border rounded-full p-5'>02</h1>
                    </div>
                    <div className='flex flex-col ml-10'>
                        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold '>Lorem ipsum dolor.</h1>
                        <p className='md:text-xl  text-lg mb-5 text-gray-400'>
                        Schedule your posts for times when.</p>
                    </div>
                </motion.div>
            </motion.div>    
            
        </div>

    </div>
  )
}

export default Track