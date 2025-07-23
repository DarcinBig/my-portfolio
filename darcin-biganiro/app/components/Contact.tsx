import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]'>
      <div className='flex flex-col md:flex-row gap-5 md:justify-between md:w-full'>
        <h2 className='font-semibold text-[14px] md:text-[26px] md:max-w-[462px]'>
          Want me on your team? Let&apos;s make it happen ✨
        </h2>
        <div className='flex flex-col gap-5 items-center md:items-end'>
          <a href="mailto:d.biganiro28@gmail.com" className='self-center md:self-start bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/loose font-normal'>
            Drop me a message
            <Image src='/mail_icon.svg' alt='mail icon' width={23} height={23} />
          </a>
          <div className='flex flex-row gap-1'>
            <a href="https://www.github.com/DarcinBig" className='contact-button'>
              <Image
                src='/github_logo_dark.svg'
                alt='github logo'
                width={20}
                height={20}
                className='hidden dark:block'
              />
              <Image
                src='/github_logo.svg'
                alt='github logo'
                width={20}
                height={20}
                className='dark:hidden'
              />
            </a>
            <a href="https://www.twitter.com/big_darcin" className='contact-button'>
              <Image
                src='/twitter_icon_dark.svg'
                alt='twitter logo'
                width={20}
                height={20}
                className='hidden dark:block'
              />
              <Image
                src='/twitter_icon.svg'
                alt='twitter logo'
                width={20}
                height={20}
                className='dark:hidden'
              />
            </a>
            <a href="https://www.stackoverflow.com" className='contact-button'>
              <Image
                src='/stackoverflow_icon_dark.svg'
                alt='stackoverflow logo'
                width={20}
                height={20}
                className='hidden dark:block'
              />
              <Image
                src='/stackoverflow_icon.svg'
                alt='stackoverflow logo'
                width={20}
                height={20}
                className='dark:hidden'
              />
            </a>
          </div>
        </div>
      </div>
      <small>&copy; {new Date().getFullYear()} Darcin Biganiro</small>
    </section>
  )
}

export default Contact