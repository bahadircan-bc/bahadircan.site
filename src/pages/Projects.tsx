import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ProjectBackground from "../assets/blueprint-bg.jpg";

function Projects() {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover object-center"
        src={ProjectBackground}
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
      <div className="w-full h-[50vh] bottom-[20vh] text-white absolute">
        <div className="w-full h-full">
          <Carousel
            // autoPlay
            infiniteLoop
            emulateTouch
            showThumbs={false}
            centerMode
            centerSlidePercentage={80}
          >
            <div 
            className="w-full h-full relative flex items-center justify-center overflow-hidden px-10">
              <p className="absolute bottom-[21%] left-[13%] text-5xl">
                Project 1
              </p>
              <img
                className="object-cover h-[50vh] rounded-3xl"
                src="https://source.unsplash.com/random?sig=1"
                alt=""
              />
            </div>
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden px-10">
              <p className="absolute bottom-[21%] left-[13%] text-5xl">
                Project 2
              </p>
              <img
                className="object-cover h-[50vh] rounded-3xl"
                src="https://source.unsplash.com/random?sig=2"
                alt=""
              />
            </div>
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden px-10">
              <p className="absolute bottom-[21%] left-[13%] text-5xl">
                Project 3
              </p>
              <img
                className="object-cover h-[50vh] rounded-3xl"
                src="https://source.unsplash.com/random?sig=3"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
