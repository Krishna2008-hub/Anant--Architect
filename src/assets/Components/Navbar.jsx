import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Components/Images/Logo (2).png'

export default function Navbar() {
  return (
    <>

         <nav className="grid grid-cols-8 mx-4">
         <img src={logo} alt="ANANT ARCHITECTS logo" className="w-24" />
                <ul className="flex justify-evenly items-center col-span-3 col-end-9 gap-10 pt-4">
                    <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg "><Link to="/" className="">Home</Link></li>
                    <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg "><Link to="/Project" className="">Recent Projects</Link></li>
                    <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg "><Link to="/About-Us" className="">About Us</Link></li>
                    <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg "><Link to="/Contact" className="">Contact</Link></li>
                </ul>
        </nav>
    
    
    </>
  )
}
