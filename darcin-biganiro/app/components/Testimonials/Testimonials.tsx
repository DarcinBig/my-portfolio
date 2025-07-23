import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'

const Testimonials = () => {
  return (
    <SectionContainer id='testimonials'>
      <div className='section-contents'>
        <SectionHeader
          plainText='📢 Check out these'
          highlightText='Testimonials'
        />
      </div>
    </SectionContainer>
  )
}

export default Testimonials