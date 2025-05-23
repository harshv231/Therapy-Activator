import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Therapy Activator, your trusted partner in managing your mental health needs conveniently and efficiently. At Therapy Activator, we understand the challenges individuals face when it comes to scheduling therapy sessions and maintaining their mental health records.</p>
          <p>Therapy Activator is committed to excellence in mental healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first therapy session or managing ongoing care, Therapy Activator is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Therapy Activator is to create a seamless mental healthcare experience for every user. We aim to bridge the gap between individuals and professional psychologists, making it easier for you to access the support and therapy you need, when you need it.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Effortless Therapy Session Booking Tailored to Your Convenience and Well-Being</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Connect with a network of trusted psychologists and mental health professionals from the comfort of your home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored session recommendations and reminders to help you stay on top of your mental well-being.</p>
        </div>
      </div>
    </div>
  )
}

export default About
