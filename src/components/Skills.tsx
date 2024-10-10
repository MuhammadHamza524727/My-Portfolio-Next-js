import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 ">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div  data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl">Technologies I Work with</h2>
          

          <ul className="text-gray-500 pt-2 flex flex-col gap-2">
            <b className="text-gray-400">Skills & Expertise Web Development</b>
            
            
                <li > Proficient in JavaScript,
            TypeScript, HTML5, CSS3, with expertise in frameworks like Bootstrap
            and Tailwind CSS to build responsive and dynamic web interfaces.
            </li>
            
            <b className="text-gray-400">Backend Development</b> 
            <li>
            Experienced in using Node.js and npm for
            server-side development, enabling efficient, scalable applications.
            </li>
           
            <b className="text-gray-400">   Cybersecurity Fundamentals </b>
            <li>
             Completed a foundational course in
            cybersecurity, equipping me with essential knowledge of protecting
            systems, networks, and data.
            </li>
            
            <b className="text-gray-400"> Emerging Technologies</b>
             <li>
              Currently
            expanding expertise through courses in Artificial Intelligence and
            Metaverse technologies, offered at Governor House, to stay at the
            forefront of tech innovation.
            </li>
            </ul>
       
        </div>
        <div>
            <div className="grid grid-cols-2 text-gray-300 text-3xl sm:text-4xl gap-3">
                 <div className="space-y-3">
                    <h2  data-aos="fade-right">Typescript</h2>
                    <h2  data-aos="fade-right">React.js</h2>
                    <h2  data-aos="fade-right">Next.js</h2>
                    <h2  data-aos="fade-right">Javascript</h2>
                    <h2  data-aos="fade-right"></h2>
            

                 </div>
                 <div className="space-y-3">
                    <h2  data-aos="fade-right">Tailwind</h2>
                    <h2  data-aos="fade-right">CSS</h2>
                    <h2  data-aos="fade-right">Node.js</h2>
                    <h2  data-aos="fade-right">Bootstrap</h2>
                    

                 </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
