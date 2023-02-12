import React from 'react'
import './Navbar.css'
import Logo from '../assets/movie'
import { Link } from 'react-router-dom'
 
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
                    <Link to={'/'}>
                    <button className='pluse'
                    >Home
                    </button>
                    </Link>                    
                    
                    <Link to={'/results'}>
                    <button className='pluse'
                    >
                    Find your Film
                    </button>
                    </Link>
                    
                    <button className='pluse'
                    >Contact</button>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar