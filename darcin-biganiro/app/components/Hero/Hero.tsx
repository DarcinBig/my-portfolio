import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10'>
      <div className='flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start'>
        <h1 className='text-2xl text-center font-semibold block md:text-[40px] md:text-start md:inline'>
          <span className='-ml-3'>👋</span> Hi! I&apos;m Darcin, I&apos;m a {' '} <span className='block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0'>Software Developer and Graphic Designer</span>
        </h1>
        <p className='text-center text-sm mx-6 md:text-start md:mx-0'>
          I&apos;m obsessed with code and helping startups create unique and helpful products.
        </p>
        <a href="mailto:d.biganiro28@gmail.com" className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>
          Let&apos;s Connect{' '}
          <Image src='/arrow_right_icon.svg' width={23} height={23} alt='arrow right icon'/>
        </a>
      </div>
      <div>
        <Image src='/profile_light_purple.png' alt='light purple rectangle' width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10' />
        <Image src='/profile_dark_purple.png' alt='dark purple rectangle' width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10' />
        <Image src='/Darcin.jpg' alt='Darcin profile picture' width={350} height={410} className='hidden md:block min-w-[350px] h-[410px] z-10 mr-[7.7px] my-[6.5px] rounded-2xl' />
      </div>
    </section>
  )
}

export default Hero