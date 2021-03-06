import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/duc_about.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My Name's</h5>
        <h1>Duc Than</h1>
        <h5 className='text-light'>Software Engineering</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header