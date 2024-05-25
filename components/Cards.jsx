import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Cards(pageProps) {
  return (
    <div className='cards max-w-[25rem] m-3 min-h-[25rem] h-full rounded-lg flex flex-col hover:scale-105 transform duration-200 shadow-xl lg:w-[28rem] lg:mx-auto'>
      <div className='img focus:outline-none'>
        {/* lg:m-0 lg:mx-3 lg:my-3 */}
        <img
          src={
            pageProps?.imgUrl
              ? pageProps?.imgUrl
              : "https://media.slidesgo.com/storage/6724973/conversions/31-graphic-design-project-proposal-thumb.jpg"
          }
          alt='Portfolio bg img'
          layout='fill'
          className='rounded-t-lg object-cover h-64 min-w-full focus:outline-none'
        />
      </div>
      <div className='text-part bg-white flex flex-col justify-between rounded-b-lg focus:outline-none'>
        <span className='px-2 py-5 font-poppins font-semibold text-xl text-center'>
          {pageProps?.title}
        </span>
        <div className='bg-gray-300 h-[2px] mx-5 rounded-full'></div>
        <p className='p-5 font-poppins md:text-sm text-justify flex-1'>
          {pageProps?.desc}
        </p>
        {/* <a rel="noreferrer" href="/" className="m-3"> */}
        <div className='h-[2px] bg-gray-300 mx-5 rounded-full'></div>
        <div className='text-white rounded-lg p-2 md:p-4 min-w-full flex justify-center items-center space-x-2 md:space-x-9'>
          <a
            rel='noreferrer'
            target='_blank'
            href={pageProps?.github}
            className='text-slate-800 text-4xl'
          >
            <FaGithub />
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            href={pageProps?.host}
            className='text-slate-800 text-4xl'
          >
            <FaGlobe />
          </a>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}
