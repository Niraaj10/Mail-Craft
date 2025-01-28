import React from 'react'
import logo from '../assets/emailLogo.svg'

const Header = () => {
  return (
    <header className='header z-50 fixed bg-transparent backdrop-blur-sm w-full p-3 px-7 flex justify-between items-center'>

      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" className='w-16 h-16' />
        <span className='poppins font-extralight text-2xl'>Email.Temp</span>
      </div>

      <nav>
        <ul className='flex items-center gap-3 cursor-pointer'>
          <li>Templates</li>
          <li>Pricing</li>
        </ul>
      </nav>

      <div className='flex items-center gap-3 cursor-pointer'>
      <button className='p-2 border border-white/10 rounded-md bg-white text-black hover:bg-white/5 hover:text-white hover:scale-110 transition-all duration-700 px-5'>Login </button>

      </div>

    </header>
  )
}

export default Header
