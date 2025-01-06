import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Mufasir Ahamed</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/Mufasir123"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/mufasir-ahamed-26600917b/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/mufasir_ah_amed/"><FaInstagram /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2024 Mufasir Ahamed</p>
        
    </div>
  )
}

export default Footer