import React from 'react'
import './Navbar.css'
import Logo from '../assets/movie'

function Navbar() {

  return (
    <>
    <nav className='navbar'>
            <div className="navbar__left">
                <img 
                className='navbar__logo'
                src={Logo}
                alt=''
                 />
            </div>

            <div className="navbar__right">
                <ul className='navbar__links'>
                    <button className='pluse'>Home</button>
                    <button className='pluse'>Find your Film</button>
                    <button className='pluse'
                    >Contact</button>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar