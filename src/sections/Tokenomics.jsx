import React from 'react'

const Tokenomics = () => {
  return (
    <div id='token'>
      <div className='flex gap-4 mt-16 items-center'>
      <img src="/toko1.png" alt="" className='mx-auto h-[55px] sm:h-auto' />
      <h1 className="text-3xl sm:text-7xl text-[#E8BA4B] text-center font-bold mt-0 sm:mt-20 font-sora">
        Tokenomics
      </h1>

      <img src="/toko2.png" alt="" className='mx-auto  h-[55px] sm:h-auto' />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center  mt-20">
        <div className="flex flex-col justify-between lg:h-[300px]   md:h-[180px]   w-auto md:max-w-[200px] self-stretch gap-y-6 pl-12 mb-[-80px]">
          <div className=" ">
            <h3 className="font-bold text-[#E8BA4B]">Contract Address</h3>
            <p className="text-white font-pop break-words">
              0xfb66321d7c674995dfcc2cb67a30bc978dc862ad
            </p>
          </div>
          <div className=" ">
            <h3 className="font-bold text-[#E8BA4B]">Taxes</h3>
            <p className="text-white font-pop break-words">1%</p>
          </div>
        </div>

        <img
          className="md:flex hidden mx-[2vw] lg:h-[300px] md:h-[180px]  w-auto"
          src="/tokenomics-center.png"
        />
        <img
          className="md:hidden flex w-full sm:w-[55%] mx-auto my-7"
          src="/tokenomics-center-sm.png"
        />
        <div className="flex flex-col justify-between  lg:h-[300px] md:h-[180px]   w-auto md:max-w-[200px] self-stretch gap-y-6 sm:mt-0 mt-[-50px]">
          <div className=" ">
            <h3 className="font-bold text-[#E8BA4B]">Total Supply</h3>
            <p className="text-white font-pop break-words">
              420,690,000,000,000
            </p>
          </div>
          <div className=" ">
            <h3 className="font-bold text-[#E8BA4B]">Security</h3>
            <p className="text-white font-pop break-words">
              Ownership Renounced at Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
