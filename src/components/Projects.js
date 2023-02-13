import React from "react";

import zenclass from "../Assets/Images/zenportal.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: zenclass,
      demo: "https://magnificent-hamster-6db4e1.netlify.app/",
      front: "https://github.com/Sanjayvinoth7/zen-class-project-frontend",
      back: "https://github.com/Sanjayvinoth7/zen-class-project-backend",
      about: "Zen Class Portal",
      
    },
    {
      id: 2,
      src: zenclass,
      demo: "https://magnificent-hamster-6db4e1.netlify.app/",
      front: "https://github.com/Sanjayvinoth7/zen-class-project-frontend",
      back: "https://github.com/Sanjayvinoth7/zen-class-project-backend",
      about: "Zen Class Portal",
      
    },
   
    
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b  from-gray-800 to-black w-full text-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id,src,about, demo, front, back }) => (
            <div
              key={id}
              style={{
                backgroundImage: `url(${src})`,
              }}
              className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tracking-wider">
                  {about}
                </span>
                <div className="pt-8 text center">
                  <a target="_blank" rel="noreferrer" href={`${demo}`}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg  text-white  bg-black">
                      Visit
                    </button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={`${front}`}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-white text-lg bg-black">
                      FrontEnd
                    </button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={`${back}`}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-white text-lg bg-black">
                      BackEnd
                    </button>
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;