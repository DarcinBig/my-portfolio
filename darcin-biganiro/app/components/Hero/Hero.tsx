import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto'>
      <div className='flex flex-col gap-[13px] items-center'>
        <h1 className='text-2xl text-center font-semibold block mt-5'>
          <span className='-ml-3'>👋</span> Hi! I&apos;m Darcin, I&apos;m a {' '} <span className='block text-[27px] highlight mt-2'>Software Developer & Graphic Designer</span>
        </h1>
        <p className='text-center text-sm mx-6'>
          I&apos;m obsessed with code and helping startups create unique and helpful products.
        </p>
      </div>
    </section>
  )
}

export default Hero