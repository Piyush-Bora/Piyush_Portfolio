import React from 'react'
import mainImg from "../images/portfoliowebimg.png"
// import Typed from typed.js
import {useEffect} from 'react'
// import Cards from './Cards'

function Home() {
  const socialMedia =[
    {name: 'logo-github', link: 'http://github.com'},
    {name: 'logo-linkedin', link: 'http://linkedin.com/in/piyushbora'},
    {name: 'mail', link: 'mailto:29piyushbora@gmail.com'},
    {name: 'call', link: 'tel:+917666066207'}
  ]

  const TypedReactHooksDemo = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
        strings: [
          'Some <i>strings</i> are slanted',
          'Some <strong>strings</strong> are bold',
          'HTML characters &times; &copy;'
        ],
        typeSpeed: 50,
        backSpeed: 50,
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])
  return (
    <div className="min-w-screen min-h-screen">

        {/* main img and intro text */}
        <div className="main-intro md:grid md:grid-cols-2 mx-5">
          <section className="img-side flex justify-center md:justify-end md:mr-12 md:h-full h-fit">
            <img src={mainImg} alt="" className="w-11/12 object-contain"/>
          </section>
          <section className="flex flex-col justify-start md:justify-center md:items-start md:ml-4 lg:space-y-6 space-y-4 h-full md:my-5">
            <p className="text-[#0891B2] text-6xl text-center md:text-left md:text-7xl font-semibold font-poppins mt-2 md:mt-0">Hello!</p>
            <p className="text-white text-4xl text-center md:text-left md:text-6xl font-semibold font-poppins">I am Piyush Bora</p>
            <p className="typed text-gray-600 text-3xl text-center md:text-left md:text-4xl font-semibold font-poppins">Web Developer</p>
            <button className="text-white text-xl mx-auto md:mx-0 py-3 px-4 font-poppins font-semibold bg-[#0891B2] rounded-full w-fit" >Contact Me</button>
            <div className="handles flex flex-row text-4xl items-center justify-center gap-5">
              {socialMedia?.map((icon) => (
                <a href={icon.link} key={icon.id} className="text-gray-400 hover:text-white cursor-pointer">
                  <ion-icon name={icon.name} ></ion-icon>
                </a>
              ))}
            </div>
          </section>
        </div>

        
    </div>
  )
}

export default Home
