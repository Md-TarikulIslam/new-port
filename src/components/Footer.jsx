import React from 'react'
import { FaFacebookF, FaGithubAlt, FaLinkedinIn, FaRegCopyright, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mx-auto py-10 bg-white bg-opacity-60 mt-10' style={{ boxShadow: "1px 0px 7px #cad4de" }}>
            <div className='mx-auto flex flex-col'>
                <p className='text-center font-bold text-lg lg:text-2xl font uppercase tracking-widest'>Md. Tarikul Islam</p>
                <div className='flex w-96 justify-center mt-2 lg:mt-5 mx-auto gap-1 lg:gap-2 pb-8 lg:pb-0'>
                    <a target='_blank' href="https://www.facebook.com/alwaysnayon"><FaFacebookF className='text-3xl rounded-lg  lg:text-4xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/alwaystarikul/"> <FaLinkedinIn className='text-3xl lg:text-4xl rounded-lg hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://twitter.com/tarikul_nayon"><FaTwitter className='text-3xl rounded-lg lg:text-4xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://github.com/Md-TarikulIslam"> <FaGithubAlt className='text-3xl lg:text-4xl rounded-lg hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                </div>
                <p className='font text-center text-xs -mt-5 lg:mb-0 mb-7 lg:mt-5 flex items-center justify-center gap-1 '><FaRegCopyright /> 2024 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer