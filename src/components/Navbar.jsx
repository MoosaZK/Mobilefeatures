import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import logo from '../images/logo.svg'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav = () =>{
        setNav(!nav)
    } 
  return <div className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80">
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
    <img src={logo} alt="" />
    <ul className="hidden md:flex font-semibold">
    <li className="p-4 ">
            <a href="#features" className="hover:text-[#7083F5] cursor-pointer">
              Features
            </a>
          </li>
          <li className="p-4">
            <a href="#track" className="hover:text-[#7083F5] cursor-pointer">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#create" className="hover:text-[#7083F5] cursor-pointer">
              How
            </a>
          </li>
          <li className="p-4">
            <a href="#form" className="hover:text-[#7083F5] cursor-pointer">
              Support
            </a>
          </li>
          <button className=" bg-[#7083F5] w-[150px] py-4 rounded-md font-medium mx-auto text-white hover:bg-[#8697f4]">Sign Up</button>
    </ul>
    <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        
    </div>
    <div className={nav ? "fixed left-0 top-0 w-[60%] bg-[#ffff] h-full border-r border-r-gray-200 ease-in-out duration-500 ": "fixed left-[-100%]"}>
    {/* <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React</h1> */}
    <div className="w-full text-3xl font-bold m-4 ">

        <img src={logo} alt="" />
    </div>
    
        <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-300"><a  onClick={handleNav} href="#features" className="hover:text-[#7083F5] cursor-pointer">
              Features
            </a></li>
            <li className="p-4 border-b border-gray-300"><a onClick={handleNav} href="#track" className="hover:text-[#7083F5] cursor-pointer">
              About
            </a></li>
            <li className="p-4 border-b border-gray-300"><a onClick={handleNav} href="#create" className="hover:text-[#7083F5] cursor-pointer">
              How
            </a></li>
            <li className="p-4"> <a onClick={handleNav} href="#form" className="hover:text-[#7083F5] cursor-pointer">
              Support
            </a></li>
        </ul>
    </div>
  </div>
  </div>;
};

export default Navbar;
