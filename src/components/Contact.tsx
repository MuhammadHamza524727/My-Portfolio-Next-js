import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
       <div  className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
           <h2 className='text-5xl'  data-aos="fade-right">Get in Touch</h2>
           <p className='text-gray-600 text-[18px] pt-2'  data-aos="fade-right">
            Drop me a line, give me a call , or send me a message by submitting the form.
           </p>
           <div className='flex gap-3 items-center '   data-aos="fade-right">
                   <CiMail size={30}/> muhammadhamza524727@gmail.com
           </div>
           <div className='flex gap-3 items-center '  data-aos="fade-right">
                   < FaWhatsapp  size={30}/> (+92) 314-6088466
           </div>
           <div className='flex gap-3 items-center '  data-aos="fade-right">
                   < FaGithub  size={30}/> https://github.com/MuhammadHamza524727
           </div>
           <div className='flex gap-3 items-center '  data-aos="fade-right">
                   < CiLinkedin  size={30}/> www.linkedin.com/in/muhammad-hamza-1461432a5
           </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'  data-aos="fade-right" >
                <label htmlFor="name">Name</label>
                <input type="text"
                 className='h-[40px] bg-transparent border  bg-slate-600' 
                id='name'/>

            </div>

            <div className='flex flex-col gap-1'  data-aos="fade-right">
                <label htmlFor="email">Email</label>
                <input type="text"
                 className='h-[40px] bg-transparent border  bg-slate-600' 
                id='email'/>

            </div>

            <div className='flex flex-col gap-1'  data-aos="fade-right">
                <label htmlFor="message">Message</label>
                <textarea 
                 className='bg-transparent border  bg-slate-600' 
                id='message'rows={8}>
                </textarea>

            </div>


        </div>
        <button className='bg-slate-600 p-2 px-6 w-48 '  data-aos="fade-right">Send</button>

        </div>      
    </div>
  )
}

export default Contact
