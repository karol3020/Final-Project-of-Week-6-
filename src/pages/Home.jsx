import React from 'react'
import './Home.css'
import Logo from '../assets/logo'

function Home() {
  return (
    <div className='container' >
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
                    <button className='color'><span>Home</span></button>
                    <button className='color'>Find your Film</button>
                    <button className='color'>Contact</button>
                </ul>
            </div>
        </nav>
        <div className="modal__contact">
            <h3 className="modal__title modal__title-contact">
                Let's have a chat
            </h3>
            <h3 className="modal__title modal__sub-title-contact">
                I'm currently open to new opportunities.                
            </h3>
            <form action="" id='contact__form'>
                <div className="form__items">
                    <label className='form__item--label'>
                        Name
                    </label>
                    <input
                    className='input'
                    name='user_name'
                    type="text" 
                    required
                    />
                </div>
                <div className="form__items">
                    <label className='form__item--label'>
                        Email
                    </label>
                    <input
                    className='input'
                    name='user_email'
                    type="email" 
                    required
                    />
                </div>
                <div className="form__items">
                    <label className='form__item--label'>
                        Message
                    </label>
                    <textarea
                    className='input'
                    name='message'
                    type="text" 
                    required
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Home