import cn from 'classnames'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50'>
      <button className='bg-background card-shadow p-3 md:hidden rounded'>
        <img className='block dark:hidden' src="/menu_icon_light.svg" alt="menu icon" />
        <img className='hidden dark:block' src="/menu_icon_dark.svg" alt="menu icon" />
      </button>
      <nav>
        <ul>
          <li>
            <div className={cn("rounded p-1", {"bg-primary text-white": true,})}>Home</div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar