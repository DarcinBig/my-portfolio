import Image from 'next/image'
import React from 'react'

const TopBackground = () => {
  return (
    <>
      <div className='absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10'>
        <div className='w-full h-full relative'>
          <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff52] bg-opacity-[12%] absolute top-0 left-[171px] md:top-28 md:left-72'>
            <Image src='/rocket_icon.svg' alt='rocket icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
          <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff52] bg-opacity-[12%] absolute top-[162px] -left-5 md:top-64 md:left-0'>
            <Image src='/bracket_icon.svg' alt='bracket icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
          <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff52] bg-opacity-[12%] absolute top-75 left-[149px] md:top-[585px] md:left-44'>
            <Image src='/github_icon.svg' alt='github icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
          <div className='hidden md:flex md:items-center md:justify-center md:rounded-full sm:w-11 sm:h-11 md:w-14 md:h-14 md:bg-[#f4ebff52] md:bg-opacity-[12%] md:absolute  md:top-[596px] md:left-[608px]'>
            <Image src='/electricity_icon.svg' alt='electricity icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
          <div className='hidden md:flex md:items-center md:justify-center md:rounded-full sm:w-11 sm:h-11 md:w-14 md:h-14 md:bg-[#f4ebff52] md:bg-opacity-[12%] md:absolute md:top-[158px] md:left-[606px]'>
            <Image src='/merge_icon.svg' alt='merge icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
          <div className='hidden md:flex md:items-center md:justify-center md:rounded-full sm:w-11 sm:h-11 md:w-14 md:h-14 md:bg-[#f4ebff52] md:bg-opacity-[12%] md:absolute md:top-[368px] md:left-[965px]'>
            <Image src='/stack_icon.svg' alt='stack icon' width={23} height={23} className='w-auto h-auto'/>
          </div>
        </div>
      </div>
      <Image src="/top_highlight.svg" alt="top dark mode background highlight" width={809} height={877} className='absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2' />
      {/* Mobile */}
      <Image src="/top_highlight_mobile.svg" alt="top dark mode background highlight for mobile" width={429} height={465} className='absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2' />
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto_auto] hidden dark:hidden md:block" />
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto_auto] dark:hidden md:hidden" />
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] bg-[auto_auto] hidden md:dark:block" />
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] bg-[auto_auto] hidden dark:block dark:md:hidden" />
    </>
  )
}

export default TopBackground