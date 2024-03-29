import React, { useEffect } from "react";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { animate, stagger } from "framer-motion/dom";

export default function About() {
  useEffect(() => {
    animate("p", { opacity: 1 }, { delay: stagger(0.1) });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4 mt-10">
      <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
        About Me
      </span>
      <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        I&apos;m Piyush, currently I living in Pune and pursuing my
        Undergraduate Degree from Pune Institute of Computer Technology in the
        Information Technology Course. I&apos;m currently working in the field
        of Web Development.
      </p>
      <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        I am Innovative, task-driven, and enthusiastic with knowledge of
        Web-Development, UI and UX designing and a good sense of a clean and
        user friendly interface.
      </p>
      <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        Skilled at writing well-designed, testable and efficient code using
        current best practices.
      </p>
      <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        In my spare time I like to hit the Gym, Listen to music, and play
        Badminton. I&apos;m always down for hearing about new projects, so
        please feel free to drop me a line.
      </p>

      <div className="flex flex-col w-[100%] md:w-[60rem] mx-auto pt-12 font-poppins">
        <div className="w-full bg-[#132d49] flex justify-between items-center rounded-t-lg py-4 px-3 md:px-5">
          <span className="text-white text-lg md:text-xl mr-2">
            Piyush Bora Resume
          </span>
          <a
            href="https://drive.google.com/file/d/1qoC1qzRiN2YNUeP1_nmmRnf_x9Bo5DsL/view"
            download
          >
            <div className="flex justify-center items-center space-x-2 bg-[#7bcce0] py-2 px-4 rounded-lg">
              <BsFillCloudDownloadFill className="w-6 h-6 " />
              <span className="text-slate-800 font-semibold">Download</span>
            </div>
          </a>
        </div>
        <iframe
          title="myResume"
          src="https://drive.google.com/file/d/1s5R0oiUZ8JLBHsLrHChoFfzJYed2SqCz/preview"
          // frameBorder="0"
          className="md:min-h-[40rem] min-h-[20rem]"
        ></iframe>
      </div>
    </div>
  );
}
