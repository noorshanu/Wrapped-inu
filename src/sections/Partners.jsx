import Marquee from 'react-fast-marquee'

function Partners() {
  let logos = [
    '/logos/img1.png',
    'logos/img2.png',
    '/logos/img3.png',
    '/logos/img4.png',
    '/logos/img5.png',
    '/logos/img6.png',
    '/logos/img7.png',
    '/logos/img8.png',
  ]
  return (
    <div className="mt-32">
          <div className='flex gap-4 mt-16 items-center'>
      <img src="/toko1.png" alt="" className='mx-auto  h-[55px] sm:h-auto' />
      <h1 className="text-3xl sm:text-7xl text-[#E8BA4B] text-center font-bold mt-0 sm:mt-20 font-sora">
      Partners
      </h1>

      <img src="/toko2.png" alt="" className='mx-auto  h-[55px] sm:h-auto' />
      </div>
      <h1 className="font-sora text-6xl sm:text-7xl mb-7 text-center font-bold text-[#E8BA4B]">
       
      </h1>
      <div className="py-14 px-7  ">
        <Marquee direction="left">
          {logos.map((logo) => {
            return (
              <div className="w-full flex justify-center px-8">
                <div className="w-full flex justify-center">
                  <img src={logo} alt="" className="h-[30px]  sm:h-[40px] w-auto" />
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default Partners