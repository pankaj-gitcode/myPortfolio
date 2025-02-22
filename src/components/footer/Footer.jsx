import React from 'react'
import { profileImg } from '../../assets/asset'

export const Footer = () => {
  return (
    <div>

        <div className='bg-[#0D0D0D] h-[20vh] border-t-8 border-[#9BFFF7] '>
            <div className='flex items-center justify-center gap-5 mt-[5%]'>
                <a href="https://www.linkedin.com/in/pankaj-aditya" target='_blank'>
                    <img className='bg-[#9BFFF7] w-fit h-fit rounded-full 
                    shadow-[2px_2px_3px_2px_rgba(53,255,238,0.5)]' src={profileImg.linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/pankaj-gitcode/FrontEnd-Projects/tree/main/React_Projects/portfolio" target='_blank'>
                    <img className='bg-[#9BFFF7] w-fit h-fit rounded-full 
                    shadow-[2px_2px_3px_2px_rgba(53,255,238,0.5)]' src={profileImg.github} alt="facebook" />
                </a>
                <a href="https://twitter.com" target='_blank'>
                    <img className='bg-[#9BFFF7] w-fit h-fit rounded-full 
                    shadow-[2px_2px_3px_2px_rgba(53,255,238,0.5)]' src={profileImg.twitter} alt="twitter" />
                </a>
            </div>
        </div>

    </div>
  )
}
