import React from 'react'
import logo from '../assets/Rectangle 9.png'
import { Link } from 'react-router-dom'
import { MdLanguage } from "react-icons/md";
const Navbar = () => {
    const navItems = [
        {
            link : "Overview",path : "overview"
        },
        {
            link : "Features",path : "feature"
        },
        {
            link : "About",path : "about"
        },
        {
            link : "Pricing",path : "pricing"
        }
    ]
  return (
    <>
    <div className='text-lg container flex justify-between mx-auto'>
        <div className='flex items-center space-x-14'>
            <Link to="/" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} className='w-10 inline-block items-center' alt='logo'/><span>XYZ</span></Link>
            <ul className='md:flex space-x-12'>
                {
                    navItems.map((item,i)=>(
                        <Link to={item.path} key={i} className='block hover:text-gray-300'>{item.link}</Link>
                    ))
                }
            </ul>
        </div>
        <div className='space-x-12 hidden md:flex'>
            <Link to='/' className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2'/>Language</Link>
            <button className='bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar