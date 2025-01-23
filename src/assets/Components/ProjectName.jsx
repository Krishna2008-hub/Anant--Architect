import React, { useRef } from "react";
import homepage from "./Images/home-page-img.png";
import footer from "./Images/footer.png";
import project1 from "./Images/project1.jpg";
import project2 from "./Images/project4.jpg";
import project3 from "./Images/project3.jpg";
import project4 from "./Images/home-page-img.png";
import "./Project.css";

export default function ProjectName() {
  const slideRef = useRef(null); // Use ref to access the slide container

  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]); // Move the first item to the end
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]); // Move the last item to the start
    }
  };

  return (
    <div>
      <div className="container max-[800px]:hidden">
        <div className="slide" ref={slideRef}>
          <div
            className="item"
            style={{ backgroundImage: `url(${project1})` }}
          >
            <div className="content">
              <div className="name max-md:text-xl">Project I</div>
              <div className="des ">
                Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${project2})` }}
          >
            <div className="content">
              <div className="name max-md:text-xl">Project II</div>
              <div className="des ">
                Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.

              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${project3})` }}
          >
            <div className="content text-[#00008b]">
              <div className="name max-md:text-xl">Project III</div>
              <div className="des ">
                Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.

              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url(${project4})` }}
          >
            <div className="content text-[#00008b]">
              <div className="name max-md:text-xl">Prooject IV</div>
              <div className="des ">
                Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.

              </div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="min-[800px]:hidden">
        <div className="flex justify-center items-center flex-col text-[#00008b] mx-10 font-serif mt-10">  
          <div className="grid grid-cols-8 max-[500px]:grid-cols-1 items-center gap-6 mediacard">
            <div className="col-span-5">
              <p className="font-bold text-xl font-serif">Project 1</p>
              <p className="text-sm mt-2">
              Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
              </p>
            </div>
            <img src={project1} alt="anant-architecture" className="col-span-3 shadow-2xl max-[500px]:justify-self-center" />
          </div>

          <div className="grid grid-cols-8 max-[500px]:grid-cols-1 items-center gap-6 mt-10 mediacard">
           
            <img src={project2} alt="anant-architecture" className="col-span-3 shadow-2xl max-[500px]:justify-self-center" />

            <div className="col-span-5 max-[500px]:row-start-1">
              <p className="font-bold text-xl font-serif">Project 2</p>
              <p className="text-sm mt-2">
              Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 max-[500px]:grid-cols-1 items-center gap-6 mt-10 mediacard">
            <div className="col-span-5 ">
              <p className="font-bold text-xl font-serif">Project 3</p>
              <p className="text-sm mt-2">
              Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
              </p>
            </div>
            <img src={project3} alt="anant-architecture" className="col-span-3 shadow-2xl max-[500px]:justify-self-center" />
          </div>

          <div className="grid grid-cols-8 max-[500px]:grid-cols-1 items-center gap-6 mt-10 mediacard pb-40">
           
            <img src={project4} alt="anant-architecture" className="col-span-3 shadow-2xl max-[500px]:justify-self-center" />

            <div className="col-span-5 max-[500px]:row-start-1">
              <p className="font-bold text-xl font-serif">Project 4</p>
              <p className="text-sm mt-2">
              Anant Architects is a pioneering and forward-thinking architectural firm at the forefront of innovative design solutions. Anant Architects embraces a philosophy that merges creativity, functionality, and sustainability.
                Specializing in a diverse range of projects, from residential and commercial spaces to public infrastructure and urban planning. The firm prides itself on delivering tailored architectural solutions that surpass client expectations.
                Through a commitment to environmentally conscious design practices, Anant Architect integrates sustainable elements seamlessly into their projects, ensuring a harmonious balance between aesthetics and eco-friendliness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 flex justify-center items-center w-full">
        <img className="low w-1/2" src={footer} alt="Image at bottom" />
      </div> */}
    </div>
  );
}
