import React, {useState} from "react";
import logo from "../images/logo.jpg";
// import PropTypes from 'prop-types'

function Navbar(props) {

  const [navOpen, setNav] = useState('false');

  const toggleNavBar = ()=> {
    if (navOpen === 'false') {
      setNav('true');
    }
    else{
      setNav('false');
    }
  }

  return (
    <div className="sticky top-0 z-50 h-16 w-full filter backdrop-blur-lg">
      <header className="sticky z-50 top-0 w-full h-full bg-[#1f203b] text-white flex px-3 justify-between md:justify-center items-center opacity-80 ">
        {/* <!-- left elements div --> */}
        <div className="md:absolute left-2 left-div logo">
          <img className="h-10" src={logo} alt="" />
        </div>

        {/* <!-- right elements div --> */}
        <nav className="right-div">
          <button onClick={toggleNavBar} className="p-2 mr-1 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* :className="{'translate-x-full': !navOpen, 'translate-x-0': navOpen}" */}
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-[#25274D] space-y-2 p-5 mt-3 font-gilroy text-lg z-50 transform translate-x-full ${navOpen === "false" ? "translate-x-full" : "translate-x-0"
              } duration-300 md:relative md:flex md:min-h-0 md:space-y-0 md:p-0 md:bg-opacity-0 md:opacity-100 md:mt-0 md:space-x-4 md:translate-x-0 md:mr-2`}
          >
            <a href="/">
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                Home
              </li>
            </a>
            <a href="/">
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                About
              </li>
            </a>
            <a href="/">
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                Resume
              </li>
            </a>
            <a href="/">
              <li className="border-2 border-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none hover:bg-teal-600 duration-300">
                Contact Me
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
