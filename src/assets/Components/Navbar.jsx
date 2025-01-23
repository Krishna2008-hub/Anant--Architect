import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Components/Images/Logo (2).png'

export default function Navbar() {
  return (
    <>

         <nav className="grid 2xl:grid-cols-8 md:grid-cols-6 max-[1060px]:grid-cols-4 md:mx-4">
          <img src={logo} alt="ANANT ARCHITECTS logo" className="w-24 max-[700px]:col-span-4 max-[700px]:justify-self-center" />
                  <ul className="flex justify-evenly items-center  col-span-4 2xl:col-end-9 md:col-end-7  md:gap-10 pt-4">
                      <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg max-[500px]:text-[12px]"><Link to="/" className="">Home</Link></li>
                      <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg max-[500px]:text-[12px]"><Link to="/Project" className="">Recent Projects</Link></li>
                      <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg max-[500px]:text-[12px]"><Link to="/About-Us" className="">About Us</Link></li>
                      <li className="text-[#00008B] hover:text-xl transform duration-300 font-semibold text-lg max-[500px]:text-[12px]"><Link to="/Contact" className="">Contact</Link></li>
                  </ul>
        </nav>
    
    
    </>
  )
}
