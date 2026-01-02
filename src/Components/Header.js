import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          <img className="w-14" src={logos.logogradient} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M43.183,37.582L31.209,15.429V2.232C31.209,0.99,30.17,0,28.929,0H16.707c-1.242,0-2.264,0.99-2.264,2.232v13.197L2.459,37.582c-0.914,1.689-0.868,3.74,0.115,5.391c0.983,1.649,2.766,2.668,4.686,2.668h31.115c1.92,0,3.707-1.019,4.69-2.668C44.047,41.322,44.097,39.271,43.183,37.582z M24.797,28.314c1.073,0,1.942,0.869,1.942,1.942c0,1.072-0.871,1.942-1.942,1.942c-1.072,0-1.942-0.87-1.942-1.942C22.855,29.186,23.724,28.314,24.797,28.314z M19.336,16.637c1.073,0,1.942,0.87,1.942,1.943c0,1.072-0.869,1.942-1.942,1.942c-1.073,0-1.942-0.87-1.942-1.942C17.395,17.507,18.263,16.637,19.336,16.637z M19.336,23.417c1.738,0,3.148,1.41,3.148,3.147c0,1.738-1.41,3.147-3.148,3.147c-1.739,0-3.148-1.409-3.148-3.147S17.597,23.417,19.336,23.417zM37.414,39.562c-0.404,0.688-1.143,1.094-1.938,1.094H10.159c-0.796,0-1.534-0.406-1.938-1.094c-0.404-0.688-0.415-1.528-0.028-2.226l3.043-5.47c0.434-0.782,1.29-1.23,2.18-1.145c4.041,0.385,8.583,3.842,12.642,3.688c2.174-0.083,4.192-0.875,6.114-1.934c1.085-0.6,2.45-0.207,3.052,0.877l2.219,3.982C37.828,38.033,37.818,38.875,37.414,39.562z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
               <path id="Path_84" data-name="Path 84" d="M-8.121,13.668-13,6.349V1h1.5A.5.5,0,0,0-11,.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H-19V6.349l-4.879,7.319a1.5,1.5,0,0,0-.075,1.54A1.5,1.5,0,0,0-22.631,16H-9.369a1.5,1.5,0,0,0,1.323-.792A1.5,1.5,0,0,0-8.121,13.668ZM-14,1V6.5a.5.5,0,0,0,.084.277L-13.1,8h-5.8l.815-1.223A.5.5,0,0,0-18,6.5V1Zm5.072,13.736A.489.489,0,0,1-9.369,15H-22.631a.489.489,0,0,1-.441-.264.488.488,0,0,1,.025-.513l3.489-5.235A.373.373,0,0,0-19.5,9h7a.373.373,0,0,0,.058-.012l3.489,5.235A.488.488,0,0,1-8.928,14.736ZM-14,10a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0-14,10Zm0,3a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1-14,13Zm-3-1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5A.5.5,0,0,1-17,11.5ZM-19,13a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1-19,13Z" transform="translate(24.132)"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
