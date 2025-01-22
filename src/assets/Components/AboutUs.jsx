import React from 'react'
import aboutUsImg from '../Components/Images/Aboutus.png'

export default function AboutUs() {
    return (
        <>

            <section id='Aboutus'>
                <div className="bg-white">
                    <div className="grid grid-cols-8 items-center">
                        <div className="col-span-3 col-start-2 mt-8">
                            <div className="flex flex-col justify-center items-center text-center gap-8">
                                <p className="text-[#00008B] font-bold text-3xl">About Us</p>
                                <p className="text-[#00008B] font-bold text-lg">Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.</p>
                                <p className="text-[#00008B] font-bold text-lg">Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.</p>
                                <p className="text-[#00008B] font-bold text-lg">Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.</p>
                            </div>
                        </div>
                        
                        <img src={aboutUsImg} alt="anantAboutUS" className="absolute right-0 top-10 w-[20.3vw] " />

                    </div>
                </div>
            </section>

        </>
    )
}
