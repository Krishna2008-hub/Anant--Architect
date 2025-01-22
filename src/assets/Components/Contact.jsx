import React from 'react'
import insta from '../Components/Images/insta.png'
import facbook from '../Components/Images/facebook.png'
import contcat from '../Components/Images/contact.png'

export default function Contact() {
  return (
    <section id='Contact' className='text-[#00008b]'>

        <div className="grid grid-cols-12 items-center mt-6">
            <div className="col-span-5 col-start-2">
                <p className="text-[#00008b] font-semibold font-serif text-3xl">Get in touch </p>
                <p className="text-[#00008b] font-semibold font-serif text-4xl pt-10">Monisha Terse</p>
                <p className="text-[#00008b] font-semibold font-serif text-2xl pt-2 ">Architect</p>
            </div>
            <div className="col-span-5">
                <img src={contcat} alt="" className="shadow-2xl rounded-3xl " />
            </div>
        </div>

        <div className="grid grid-cols-3 font-serif font-semibold mx-20 gap-40 mt-6">
            <div className="  ">
                <p className="text-xl">Address</p>
                <p className="text-lg"> Kudal, Sindhudurg, </p>
                <p className="text-lg">Maharashtra</p>
            </div>

            <div className="">
            <p className="text-xl">Email</p>
                <p className="text-lg">anantarchitects@gmail.com </p>
                
            </div>
            <div className="">
                <p className="text-xl ">Phone</p>
                <p className="text-lg font-sans  ">+91 9892480611 </p>
            </div>
        </div>

        <div className="flex justify-between items-center mt-4 mx-20">
            <div className="flex justify-evenly gap-10 items-center">
                <img src={insta} alt="" className="w-12" />
                <img src={facbook} alt="" className="w-12" />
            </div>

            <div className="">
                <button type='button' className='bg-[#00008b] text-xl font-semibold rounded-xl px-6 py-1 text-white  '>Contact Me</button>
            </div>
        </div>



    </section>
  )
}
