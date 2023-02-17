import React from 'react'
import './Contactform.css'
import Refresh from '@mui/icons-material/Refresh';
import Close from '@mui/icons-material/Close';

function Contactform() {

    const closeContact = (event) => {
        event.preventDefault()
        const show = document.querySelector( '.modal__shownes')
            show.classList += ( '.modal__hide')
            }

  return (
    <div className='modal__shownes'>
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
    </div>
  )
}

export default Contactform