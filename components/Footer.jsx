import React from "react";
// import logo from "../images/pLogo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
// import {Fade} from "react-awesome-reveal";

const Footer = () => {
  const socialMedia = [
    {
      id: 101,
      name: <FaGithub className="text-2xl" />,
      link: "http://github.com/Piyush-Bora",
    },
    {
      id: 102,
      name: <FaLinkedin className="text-2xl" />,
      link: "http://linkedin.com/in/piyushbora",
    },
    {
      id: 103,
      name: <FaEnvelope className="text-2xl" />,
      link: "mailto:29piyushbora@gmail.com",
    },
    {
      id: 104,
      name: <FaPhoneAlt className="text-2xl" />,
      link: "tel:+917666066207",
    },
  ];

  return (
    <div className="px-5 md:px-8 h-20 mt-10">
      {/* <Fade direction={"up"} cascade={true}> */}
      <footer className="relative min-w-full bottom-0 left-0 text-gray-400 border-t-2 border-dashed border-gray-400">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <p
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200"
          >
            <Image
              src="/images/pLogo.png"
              alt=""
              className="h-8 w-8 object-contain"
              width={500}
              height={500}
            />
            {/* <span className="mx-3 text-3xl">|</span> */}
            <span className="ml-4 text-xl border-l-2 px-4 border-gray-300">
              Made by Piyush Bora
            </span>
          </p>
          <div className="social-media flex flex-row text-4xl items-center justify-center sm:ml-auto sm:mt-0 mt-4 sm:justify-start gap-4">
            {socialMedia?.map((icon) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={icon?.link}
                key={icon?.id}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <span>{icon?.name}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
      {/* </Fade> */}
    </div>
  );
};

export default Footer;
