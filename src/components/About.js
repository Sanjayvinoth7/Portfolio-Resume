import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-white from-gray-800 to-white text-black sm:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi 👋, I'm Sanjayvinoth M <br />
          <br />I have been learning MERN stack web development and developing
          the responsive web applications with my skills. 
        </p>

        <br />

        <p className="text-xl">
          Full Stack Developer with quite few own projects looking for an
          opportunity to work and expose my skills in an organization and
          interested to explore and work on a different types of projects.
        </p>
      </div>
    </div>
  );
};

export default About;