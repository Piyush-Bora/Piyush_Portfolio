import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";
import { content } from "../Content";

const WorkHistory = () => {
  const { WorkEx } = content;
  return (
    <section id='workex' className='bg-bg_light_primary'>
      <div className=' md:container px-5 pt-14 flex flex-col'>
        <div>
          <h2 className='title' data-aos='fade-down'>
            {WorkEx.title}
          </h2>
          <h4 className='subtitle' data-aos='fade-down'>
            {WorkEx.subtitle}
          </h4>
          <br />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <VerticalTimeline lineColor='#06223F'>
            {WorkEx.experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company} // Add a unique key for each element
                className='vertical-timeline-element--work drop-shadow-xl'
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
                icon={<FaShoppingBag />}
              >
                <h3 className='vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between'>
                  {" "}
                   {experience.company}{" "}
                  <a
                    href={experience.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mx-2'
                  >
                    <FaLink />
                  </a>
                </h3>{" "}
                <h4 className='vertical-timeline-element-subtitle py-2 text-2xl'>
                  {experience.role} 
                </h4>
                <ul className='list-disc px-5 font-poppins text-slate-600'>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className='flex flex-wrap mt-3 text-sm font-poppins'>
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}

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
