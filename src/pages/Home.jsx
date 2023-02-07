import React, { useEffect, useState } from 'react'
import './Home.css'
import Logo from '../assets/logo'
import Refresh from '@mui/icons-material/Refresh';
import Close from '@mui/icons-material/Close';


function Home() {

    const closeContact = (event) => {
        event.preventDefault()
        const show = document.querySelector( '.modal__contact' , '.modal__title' 
        , '.contact__form' , '.modal__overlay' ,
        '.modal__overlay--loading' ,
        'modal__overlay--success' ,
        '.modal__overlay--loading > .MuiSvgIcon-root' ,
         )
        show.classList.remove( '.modal__open')
    }
    
    const openContact = (event) => {
        event.preventDefault()
        const show = document.querySelector( '.modal__contact')
        show.classList += ( '.modal__open')
    }

    // const sendMessage = (event) => {
    //     event.preventDefault()
    //     // emailjs section

    //     const formpage = document.querySelector ( " .contact__form")
    //     const loadingstage = document.querySelector(' .modal__overlay--loading')
    //     const loadinganimation = document.querySelector( '.modal__overlay--loading > .MuiSvgIcon-root ')
    //     const success = document.querySelector (' .modal__overlay--success')

    //     setTimeout(() => {
    //         formpage.classList += ( '.modal__negative--opacity')
    //         loadingstage.classList += ( '.modal__show')
    //         loadinganimation.classList += ( '.modal__show')
    //     }, 1000);
        
    //     setTimeout(() => {
    //         loadinganimation.classList += ( '.modal__hide')
    //         success.classList += ( '.modal__show')
    //     }, 2000);
    // }

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
                    <button className='pluse'>Home</button>
                    <button className='pluse'>Find your Film</button>
                    <button className='pluse'
                    onClick={openContact}
                    >Contact</button>
                </ul>
            </div>
        </nav>
        <div className="modal__contact">
            <h3 className="modal__title modal__title-contact">
                Let's have a chat
            </h3>
            <h3 className="modal__title modal__title-contact">
                I'm currently open to new opportunities.                
            </h3>
            <form 
            // onSubmit={sendMessage} 
            className='contact__form'>
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
                <button id='contact__submit' 
                className='form__submit click '
                >
                    Send it my way 
                </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">    
                    <Refresh />
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message !! Looking forward to speaking to you soon .
            </div>
            <div className="modal__exit click "> 
                    <Close 
                    onClick={closeContact} />
            </div>
        </div>
    </div>
  )
}

export default Home