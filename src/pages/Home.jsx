import React from 'react'
import './Home.css'
import Logo from '../assets/logo'

function Home() {
  return (
    <div>
        <nav className='navbar'>
            <div className="navbar__left">
                
                <img 
                src={Logo}
                alt=''
                 />

            </div>

            <div className="navbar__right">
                <ul className='navbar__links'>
                    <li className='navbar__link'>Home</li>
                    <li className='navbar__link'>Find your Film</li>
                    <li className='navbar__link'>Contact</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Home