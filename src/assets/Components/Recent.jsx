import homeimg from "./Images/home-page-img.png"

import footer from './Images/footer.png'
import './Recent.css'

export default function Recent() {
    return(
        <div>
         

            <div className="Recent-page">

                <h1 className="text-[#00008B] font-bold text-3xl flex justify-center font-serif mt-10">Recent Projects</h1>


                 {/* Dada image add image whenever you get */}

                 
                
                
                <div className="images">
                    <img className="imag" src={homeimg} alt="" />
                    <img className="imag" src={homeimg} alt="" />
                    <img className="imag" src={homeimg} alt="" />
                </div>

                
                    <div className="absolute bottom-0 flex justify-center items-center w-full">
                         <img className="low w-1/2" src={footer} alt="Image at bottom"  />
                    </div>
            

            </div>
        </div>
    );
}