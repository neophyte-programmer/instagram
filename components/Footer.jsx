import React from 'react'
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
      <div className='text-blue-500 p-2  flex flex-col lg:flex-row items-center lg:justify-between justify-center w-full    border-t-2 border-blue-200 z-50'>
          <div className='flex flex-col  w-full gap-2'>
          {/* <p className='w-full text-center font-semibold text-gray-700'>This application was built by</p> */}
              <h1 className='text-center w-full cormorant text-3xl'>Nutifafa</h1>
              <div className='flex max-w-sm gap-4 items-center justify-center mx-auto'>
                  <a href="http://github.com/neophyte-programmer" className='btn'>
                    <FiGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/neophyteprogrammer/" className='btn'>
                    <BsLinkedin />
                  </a>
                  <a href="mailto:attorfafa@gmail.com" className='btn'>
                    <FiMail />
                  </a>
                  <a href="https://twitter.com/Nutifafa18" className='btn'>
                    <FiTwitter />
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Footer