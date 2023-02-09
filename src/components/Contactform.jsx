import React from 'react'
import './Contactform.css'
import Refresh from '@mui/icons-material/Refresh';
import Close from '@mui/icons-material/Close';

function Contactform() {


    const closeContact = (event) => {
        event.preventDefault()
        const show = document.querySelector( '.modal__contact')
            const show2 = document.querySelector( '.modal__title')
                const show3 = document.querySelector ( '.contact__form')
       
                show.classList += ( ' modal__hide')
                show2.classList +=  ( ' modal__hide')
                show3.classList +=  ( ' modal__hide')
            }

            const openContact = (event) => {
                event.preventDefault()
                const show = document.querySelector( '.modal__contact')
                    const show2 = document.querySelector( '.modal__title')
                        const show3 = document.querySelector ( '.contact__form')
               
                        show.classList += ( ' modal__show')
                        show2.classList +=  ( ' modal__show')
                        show3.classList +=  ( ' modal__show')
                    }
                    
    // const closeContact = (event) => {
    //     event.preventDefault()
    //     const show = document.querySelector( '.modal__contact')
    //         const show2 = document.querySelector( '.modal__title')
    //             const show3 = document.querySelector ( '.contact__form')
       
    //             show.classList += ( ' modal__hide')
    //             show2.classList +=  ( ' modal__hide')
    //             show3.classList +=  ( ' modal__hide')
    //         }

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
    // }w


  return (
    <>
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
                    className='input__form'
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
                    className='input__form'
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
                    className='input__form'
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
                    onClick={closeContact} 
                    /> 
            </div>
        </div>
    </>
  )
}

export default Contactform