import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id="hero" className='   min-h-screen bg-no-repeat bg-[url(/mypro1.png)] bg-cover  '
      style={{ backgroundSize: "35%", backgroundPosition: "left 800px top 100px" }}
    >
      <Navbar />
      <div className='container  grid lg:grid-cols-2 h-[calc(100vh-60px)]  lg:h-[500px]'>
        <div className='text-[80px] sm:text-[50px] font-bold leading-tight flex  items-center'>

          <div >
            <h2 >I m </h2>

            <h1 className='text-gray-400 '>

              <Typewriter

                options={{
                  strings: [

                    "Md Hamza",
                    "Front-end Dev",
                    "Cyber Security", 
                  ],
                  autoStart: true,
                  loop: true,
                  

                }}
              />
            </h1>
          </div>
        </div>
        <div className='hidden lg:block'></div>

      </div>

    </div>
  )
}

export default Hero
