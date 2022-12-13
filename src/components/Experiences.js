import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";
import Positions from "./Positions";
import {Fade} from "react-awesome-reveal";

function Experiences() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="w-full text-center text-4xl md:text-5xl text-white my-20 drop-shadow-xl font-poppins">
        <Fade  delay={100} duration={1000}>
          Experiences
        </Fade>
      </span>

      <VerticalTimeline>
        <Fade  delay={100} duration={1000}>
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
                  While the internship tenure, I made publicity videos and
                  posters for the brand.
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
        </Fade>
      </VerticalTimeline>

      <span className="w-full text-center text-4xl md:text-5xl text-white mt-24 mb-16 drop-shadow-xl font-poppins">
      <Fade  delay={100} duration={1000}>
        Positions
        </Fade>
      </span>

      <div className="flex flex-wrap justify-center items-center mx-4">
      <Fade  delay={100} duration={1000}>
        {Positions.map((item) => (
          <div
            key={item.id}
            className="flex bg-white p-3 rounded-lg mx-2 my-3 md:my-0 max-w-[20rem] md:max-w-[30rem]"
          >
            <img
              src={require(`../images/${item.img}`)}
              alt=""
              className="w-24 h-24 object-contain py-2 pl-2 pr-3 border-r-2"
            />
            <div className="text flex flex-col justify-center items-start p-1">
              <h1 className="font-poppins font-semibold">
                {item.organization}
              </h1>
              <span className="text-sm">{item.title}</span>
              <span className="text-gray-600 text-xs">{item.duration}</span>
            </div>
          </div>
        ))}
        </Fade>
      </div>
    </div>
  );
}

export default Experiences;
