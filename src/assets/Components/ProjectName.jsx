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
      <div className="container ">
        <div className="slide" ref={slideRef}>
          <div
            className="item"
            style={{ backgroundImage: `url(${project1})` }}
          >
            <div className="content">
              <div className="name">Project I</div>
              <div className="des">
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
              <div className="name">Project II</div>
              <div className="des">
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
              <div className="name">Project III</div>
              <div className="des">
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
              <div className="name">Prooject IV</div>
              <div className="des">
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

      <div className="absolute bottom-0 flex justify-center items-center w-full">
        <img className="low w-1/2" src={footer} alt="Image at bottom" />
      </div>
    </div>
  );
}
