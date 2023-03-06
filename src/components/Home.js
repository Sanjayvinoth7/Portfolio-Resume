import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black to-gray-800  h-screen pt-20 sm:pt-0"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto items-center justify-center h-full px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am Full stack Developer
          </h2>
          <p className="text-white max-w-md py-4">
           A passionate Full Stack Devoloper. I develop web applications.
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white px-6 py-3  my-2 w-fit flex items-center rounded-md bg-gradient-to-r  cursor-pointer"
            >
              Let's Connect
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
        </div>
        <div>
          <div className="flex row text-white sm:hidden">
            <div className="flex-col">
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sanjay-vinoth-b1564b266/"
              >
                <FaLinkedin size={30} />
                <span className="ml-3">Linkedin</span>
              </a>
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Sanjayvinoth7"
              >
                <FaGithub size={30} />
                <span className="ml-3">Github</span>
              </a>
            </div>
            <div className="flex-col">
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/18rf3o96UoQUjXn4biyfbrlDyzyRpNkKM/view?usp=share_link"
              >
                <BsFillPersonLinesFill size={30} />
                <span className="ml-3">Resume</span>
              </a>
              <a
                className="flex items-center  py-2 my-2 "
                target="_blank"
                rel="noreferrer"
                href="mailto:sanjayvinoth7@gmail.com"
              >
                <HiOutlineMail size={30} />
                <span className="ml-3">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;