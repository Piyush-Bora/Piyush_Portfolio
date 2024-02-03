import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";
import Positions from "../components/Positions";
import Image from "next/image";

function Experiences() {
  return (
    <div className="flex flex-col justify-center items-center py-8 mt-10">
      <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
        Experiences
      </span>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work drop-shadow-xl"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Dec 2021 - Feb 2022"
          dateClassName="text-white drop-shadow-xl"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          icon={<FaShoppingBag />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
            Vibrancy{" "}
            <a
              href="https://www.wevibrancy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLink />
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle py-2">
            Graphic Designer and Video Editor Intern
          </h4>
          {/* <p className="px-5 font-poppins text-slate-600"> */}
          <ul className="list-disc px-5 font-poppins text-slate-600">
            <li>
              I have worked as a video editor and graphic design intern at
              Vibrancy.
            </li>
            <li>
              While the internship tenure, I made publicity videos and posters
              for the brand.
            </li>
            <li>
              I also worked on designing the mock-ups for the websites and
              applications.
            </li>
          </ul>
          {/* </p> */}
          <div className="flex flex-wrap mt-3 text-sm font-poppins">
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Photoshop
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Premiere Pro
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              After Effects
            </span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work drop-shadow-xl"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Dec 2021 - Feb 2022"
          dateClassName="text-white drop-shadow-xl"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          icon={<FaShoppingBag />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
            AutomatonAI{" "}
            <a
              href="https://www.wevibrancy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLink />
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle py-2">
            Frontend Web Developer Intern
          </h4>
          {/* <p className="px-5 font-poppins text-slate-600"> */}
          <ul className="list-disc px-5 font-poppins text-slate-600">
            <li>
              Worked on the ongoing projects of the company of building a new
              website for the AdaptAI product, with MERN stack Technologies.
            </li>
            <li>
              Learnt the basics of Angular and implemented my knowledge in
              building some modules in the existing websites.
            </li>
            <li>
              Gained experience working in a team, which improved my
              communication and collaboration skills.
            </li>
          </ul>
          {/* </p> */}
          <div className="flex flex-wrap mt-3 text-sm font-poppins">
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              HTML
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              CSS
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              ReactJS
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Rest API
            </span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work drop-shadow-xl"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Dec 2021 - Feb 2022"
          dateClassName="text-white drop-shadow-xl"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          icon={<FaShoppingBag />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
            Sanspots{" "}
            <a
              href="https://www.wevibrancy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLink />
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle py-2">
            UI/UX Designer Intern
          </h4>
          {/* <p className="px-5 font-poppins text-slate-600"> */}
          <ul className="list-disc px-5 font-poppins text-slate-600">
            <li>
              Designed user-centric interfaces for web and mobile applications,
              ensuring seamless and intuitive user experiences.
            </li>
            <li>
              Conducted user research and usability testing to inform design
              decisions and validate assumptions.
            </li>
            <li>
              Collaborated with cross‑functional teams, including developers and
              designers, to ensure alignment and transparency throughout the
              design and development process.
            </li>
            <li>
              Collaborated with cross‑functional teams, including developers and
              designers, to ensure alignment and transparency throughout the
              design and development process.
            </li>
          </ul>
          {/* </p> */}
          <div className="flex flex-wrap mt-3 text-sm font-poppins">
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              UI/UX
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Photoshop
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Illustrator
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Figma
            </span>
            <span className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1">
              Canva
            </span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          icon={<FaUserClock />}
        />
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaShoppingBag />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>

      <span className="w-full text-center text-4xl md:text-5xl text-white mt-24 mb-16 drop-shadow-xl font-poppins">
        Positions
      </span>

      <div className="flex flex-wrap justify-center items-center mx-4 gap-y-5">
        {Positions.map((item) => (
          <div
            key={item.id}
            className="flex bg-white p-3 rounded-lg mx-2 my-3 md:my-0 max-w-[20rem] md:max-w-[30rem]"
          >
            <Image
              src={`/images/${item.img}`}
              alt="Hello"
              className="w-24 h-24 object-contain py-2 pl-2 pr-3 border-r-2"
              // fill={true}
              objectPosition="relative"
              width={1000}
              height={1000}
            />
            <div className="text flex flex-col justify-center items-start pl-4">
              <h1 className="font-poppins font-semibold">
                {item.organization}
              </h1>
              <span className="text-sm">{item.title}</span>
              <span className="text-gray-600 text-xs">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
