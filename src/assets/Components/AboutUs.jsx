import React from 'react';
import aboutUsImg from '../Components/Images/Aboutus.png';

export default function AboutUs() {
    return (
        <>
            <section id="Aboutus">
                <div className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-8 items-center">
                        {/* Text Section */}
                        <div className="col-span-6 md:col-span-3 md:col-start-2 mt-8 px-4">
                            <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
                                <p className="text-[#00008B] font-bold text-2xl md:text-3xl">About Us</p>
                                <p className="text-[#00008B] font-medium text-sm 2xl:text-lg">
                                    Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                                </p>
                                <p className="text-[#00008B] font-medium text-sm 2xl:text-lg">
                                    Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                                </p>
                                <p className="text-[#00008B] font-medium text-sm 2xl:text-lg">
                                    Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="mt-8 md:mt-0 max-md:hidden">
                            <img
                                src={aboutUsImg}
                                alt="anantAboutUS"
                                className="mx-auto md:absolute md:right-0 md:top-10 w-[60vw] md:w-[20.3vw]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
