import React from 'react'
import { FaFacebookF, FaGithub, FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mx-auto py-10 bg-white bg-opacity-60 mt-10' style={{boxShadow:"1px 0px 7px #cad4de"}}>
            <div>
                <p className='text-center font-bold text-lg lg:text-2xl font'>Md. Tarikul Islam</p>
                <div className='flex w-96 justify-center mt-5 mx-auto gap-2'>
                    <a target='_blank' href="https://www.facebook.com/alwaysnayon"><FaFacebookF className='text-4xl rounded-xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/md-tarikul-islam-871134289/"> <FaLinkedinIn className='text-4xl rounded-xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://twitter.com/tarikul_nayon"><FaTwitter className='text-4xl rounded-xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                    <a target='_blank' href="https://github.com/Md-TarikulIslam"> <FaGithubAlt className='text-4xl rounded-xl hover:shadow-white shadow-sm bg-white p-2 transition   ease-in-out' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer