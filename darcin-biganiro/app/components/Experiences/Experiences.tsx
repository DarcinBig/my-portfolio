import React from 'react'
import Image from 'next/image'
import experiences from '@/data/experiences.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Experience from './Experience'

const Experiences = () => {
  return (
    <SectionContainer id='experience'>
      <div className='section-contents mb-[66px] md:mb-[43px] md:mx-[64px]'>
        <SectionHeader
          plainText='💼 My prior'
          highlightText='Work Experience'
        />
        <div className='w-full px-6 md:px-[52px] flex flex-col gap-5'>
          {experiences.map((experience, id) => (
            <Experience
              key={id}
              id={id}
              image={experience.image}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff52] bg-opacity-[12%] absolute top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10'>
        <Image
        src='/bracket_icon.svg'
        alt='bracket icon'
        width={23}
        height={23}
        />
      </div>
      <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff52] bg-opacity-[12%] absolute left-1.5 bottom-0 md:left-[90px] -z-10'>
        <Image
        src='/github_icon.svg'
        alt='github icon'
        width={23}
        height={23}
        />
      </div>
    </SectionContainer>
  )
}

export default Experiences