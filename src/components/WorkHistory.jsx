import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";

const WorkHistory = () => {
  return (
    <section id='workex' className='bg-bg_light_primary'>
      <div className=' md:container px-5 pt-14 flex flex-col'>
        <div>
          <h2 className='title' data-aos='fade-down'>
            Work Experience
          </h2>
          <h4 className='subtitle' data-aos='fade-down'>
            Work in the Past
          </h4>
          <br />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <VerticalTimeline lineColor='#06223F'>
            <VerticalTimelineElement
              className='vertical-timeline-element--work drop-shadow-xl'
              //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date='May 2023 - Jan 2024'
              dateClassName='text-lg drop-shadow-xl'
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<FaShoppingBag />}
            >
              <h3 className='vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between'>
                Amber{" "}
                <a
                  href='https://amberstudent.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-2'
                >
                  <FaLink />
                </a>
              </h3>
              <h4 className='vertical-timeline-element-subtitle py-2 text-2xl'>
                FrontEnd Developer Intern
              </h4>
              {/* <p className="px-5 font-poppins text-slate-600"> */}
              <ul className='list-disc px-5 font-poppins text-slate-600'>
                <li>
                  Developed an API to retrieve user location data and utilized
                  it to automatically fill in the country code for all
                  lead-generation modules. This boosted lead generation by 5%
                  and facilitated traffic analysis by country.
                </li>
                <li>
                  Revamped over 5 websites in Webflow for a cleaner and modern
                  UI, positively impacting the user experience.
                </li>
                <li>
                  Enhanced tracking capabilities by adding GTM (Google Tag
                  Manager) events for better analytics.
                </li>
                <li>
                  Integrated the MoEngage SDK to enable web push notifications,
                  enhancing user engagement and conversion.
                </li>
                <li>
                  Improved website SEO by 22% using anchor-based titles and
                  paginations.
                </li>
                <li>
                  Collaborated effectively in an agile environment, delivering
                  high-quality solutions and fostering a positive team
                  atmosphere.
                </li>
              </ul>

              <div className='flex flex-wrap mt-3 text-sm font-poppins'>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  UI/UX
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Photoshop
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Illustrator
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Figma
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Canva
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work drop-shadow-xl'
              //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date='Jan 2023 - Apr 2023'
              dateClassName='text-lg drop-shadow-xl'
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<FaShoppingBag />}
            >
              <h3 className='vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between'>
                Sanspots{" "}
                <a
                  href='https://www.wevibrancy.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-2'
                >
                  <FaLink />
                </a>
              </h3>
              <h4 className='vertical-timeline-element-subtitle py-2 text-2xl'>
                UI/UX Designer Intern
              </h4>
              {/* <p className="px-5 font-poppins text-slate-600"> */}
              <ul className='list-disc px-5 font-poppins text-slate-600'>
                <li>
                  Designed user-centric interfaces for web and mobile
                  applications, ensuring seamless and intuitive user
                  experiences.
                </li>
                <li>
                  Conducted user research and usability testing to inform design
                  decisions and validate assumptions.
                </li>
                <li>
                  Collaborated with cross‑functional teams, including developers
                  and designers, to ensure alignment and transparency throughout
                  the design and development process.
                </li>
                <li>
                  Collaborated with cross‑functional teams, including developers
                  and designers, to ensure alignment and transparency throughout
                  the design and development process.
                </li>
              </ul>
              {/* </p> */}
              <div className='flex flex-wrap mt-3 text-sm font-poppins'>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  UI/UX
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Photoshop
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Illustrator
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Figma
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Canva
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work drop-shadow-xl'
              //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date='Oct 2022 - Dec 2022'
              dateClassName='text-lg drop-shadow-xl'
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<FaShoppingBag />}
            >
              <h3 className='vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between'>
                AutomatonAI{" "}
                <a
                  href='https://www.wevibrancy.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-2'
                >
                  <FaLink />
                </a>
              </h3>
              <h4 className='vertical-timeline-element-subtitle py-2 text-2xl'>
                Frontend Web Developer Intern
              </h4>
              {/* <p className="px-5 font-poppins text-slate-600"> */}
              <ul className='list-disc px-5 font-poppins text-slate-600'>
                <li>
                  Worked on the ongoing projects of the company of building a
                  new website for the AdaptAI product, with MERN stack
                  Technologies.
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
              <div className='flex flex-wrap mt-3 text-sm font-poppins'>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  HTML
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  CSS
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  ReactJS
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Rest API
                </span>
              </div>
            </VerticalTimelineElement>

            {/* <VerticalTimelineElement
              className='vertical-timeline-element--work drop-shadow-xl'
              //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date='Dec 2021 - Feb 2022'
              dateClassName='text-lg drop-shadow-xl'
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<FaShoppingBag />}
            >
              <h3 className='vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between'>
                Vibrancy{" "}
                <a
                  href='https://www.wevibrancy.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-2'
                >
                  <FaLink />
                </a>
              </h3>
              <h4 className='vertical-timeline-element-subtitle py-2 text-2xl'>
                Graphic Designer and Video Editor Intern
              </h4>
              <ul className='list-disc px-5 font-poppins text-slate-600'>
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
              <div className='flex flex-wrap mt-3 text-sm font-poppins'>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Photoshop
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  Premiere Pro
                </span>
                <span className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'>
                  After Effects
                </span>
              </div>
            </VerticalTimelineElement> */}

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<FaUserClock />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
