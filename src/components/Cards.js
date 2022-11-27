import React from 'react'

function Cards(props) {
  return (
    <div className="cards max-w-[30rem] m-6 max-h-full rounded-lg flex flex-col hover:scale-105 transform duration-300 shadow-xl md:m-0 md:mx-3 md:my-3 md:w-[28rem]">
        <div className="img focus:outline-none">
          <img
            src={props.imgUrl ? props.imgUrl : "https://images.moneycontrol.com/static-mcnews/2022/01/Digital-Loan_pic.jpg"}
            alt="Portfolio bg img"
            className="rounded-t-lg object-cover h-64 w-full focus:outline-none"
          />
        </div>
        <div className="text-part bg-white flex flex-col justify-between rounded-b-lg focus:outline-none">
          <span className="p-2 font-nunito font-bold text-xl text-center">
            {props.title}
          </span>
          <hr className="bg-gray-700 mx-5" />
          <p className="p-5 font-nunito text-sm text-justify">
            {props.desc}
          </p>
          <a rel="noreferrer" href="/" className="m-3">
          <button className="bg-blue-900 text-white rounded-lg p-2 min-w-full">
            Learn More
          </button></a>
        </div>
      </div>
  )
}

export default Cards
