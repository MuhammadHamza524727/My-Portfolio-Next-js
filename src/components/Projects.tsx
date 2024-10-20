import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { strict } from 'assert'


const data =[ 
    {
        id:0,
        title:"Facebook Clone",
        desc:"Using HTML5,CSS3 clone websites its have login, signIn, Forgotten Page.",
        img:"/facebook.png",
        tags:["HTML5","CSS3"]
    },
    {
        id:1,
        title:"AliExpress Clone",
        desc:"Code a seamless shopping experience with our AliExpress clone just Showcase my Skills",
        img:"/aliexpe.png",
        tags:["HTML5","CSS3"]
    },
    {
        id:2,
        title:"Amazon Clone",
        desc:"Code a seamless shopping experience with our Amazon clone just Showcase my websites Skills ",
        img:"/amazon.png",
        tags:["HTML5","CSS3"]
    },{
        id:3,
        title:"Nurpur Clone",
        desc:"its three device Responsive and using Bootstrap ,still continuesly Growing my skills",
        img:"/nurpur.png",
        tags:["HTML5","CSS3","Bootstrap"]

    
    },
    {
        id:4,
        title:"ATM Machine",
        desc:"Experience an ATM machine simulation built with TypeScript and managed via npm and Nodejs seamlessly running on your command line. This project showcases essential ATM functionalities such as withdrawals, deposits, and balance checks.",
        img:"/java3.png",
        tags:["Typescript","Npm","NodeJs"]
        
    },
    {
        id:6,
        title:"Simple Quiz App ",
        desc:"Using Javascript array method show case on alert . Built using JavaScript array methods for efficient data handling and smooth functionality. The app features a variety of questions, tracks user scores, and provides instant feedback. ",
        img:"/java2.png",
        tags:["Javascript"]
    },
    {
        id:7,
        title:"Student Attendance Tracker",
        desc:"Using Javascript array method show case on alert ",
        img:"/java1.png",
        tags:["Javascript"]
    }
]

  
const Projects = () => {
  return (
    <div id='projects' className='container pt-32 no-underline '>
        <Heading title='My Projects ' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center no-underline'>
            {data.map((el) => (
           <Card
            key ={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags} 
            
            />
            ))}
        </div>
      
    </div>
  )
}

export default Projects
