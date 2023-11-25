import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import CreateImg from '../images/about-2-light.png'
const CreateReport = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView]);
    
  return (
    <div id='create' ref={ref}  className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <motion.div variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.55}}>
                
                <img className='mx-auto' src={CreateImg} alt="" />
            </motion.div>
            <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
            }}  
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.55}}
            className=' mx-8'>
                <h3 className='md:text-2xl sm:text-xl text-2xl font-semibold text-[#7083F5] mt-10'>Create Audience Reports</h3>
                <h1 className='my-3 md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Know More About Your Audience.</h1>
                <p className='md:text-xl sm:text-xl mb-5 text-gray-400'>Schedule your posts for times when your
audience is most active. Choose from our <br />
best-time predictions, or create your own <br />
publishing schedule.</p>
<button className=" bg-[#7083F5] w-[150px] rounded-md font-medium my-4 text-white py-4">Know More</button>

            </motion.div>    
            
        </div>

    </div>
  )
}

export default CreateReport