import React from 'react'

const About = () => {
  return (
    <div className='bg-[#E8BA4B] rounded-3xl py-10 sm:px-20 px-8' id='about'>
        {/* <h1 className='text-5xl font-bold text-black sm:text-6xl font-sora'>ABOUT</h1> */}
        <div className='text-center'>

        <img src="/about.png" alt=""  className=' h-36 mx-auto'/>
        </div>
        <p className='italic font-bold font-pop my-8'>Introducing Wrapped Inu</p>
        <p className=' text-black font-medium '>$WINU knows he made mistakes in the past, blacklisting some investors, launching on a weekend when you were spending time with your family and friends. He wants to make things right and redo his billion dollar run, he’s a new version of himself, he is now Wrapped Inu. #WrappedInu</p>
    </div>
  )
}

export default About