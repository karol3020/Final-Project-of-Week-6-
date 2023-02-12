import React from 'react'
import './OneResult.css'
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';

function OneResult() {

  return (
    <div>
        <div class="container">
            <header className='header__container' >
                <div className='header__back' >
                    <h1 className='header__name'>
                    
                    <KeyboardBackspace />
                    Back to Cave
                    </h1>

                </div>
            </header>

            <div className="film__box">
                <div className="img__box">
                    YOOOO
                    <img src="" alt="" />
                </div>

                <div className="img__info--box">
                    <h2 className='info'>Title</h2>
                    <h4 className='info'>Year</h4>
                    <h4 className='info'>Actors</h4>
                    <h4 className='info'>Time</h4>
                     <p className='info'>Description</p>       
                </div>
            </div>
        </div>
        
            <div className="films__recom">
                <div className="box__films">
                        <div className="film__recom">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Actors</h4>
                                <h4 className='info'>Time</h4>
                                <p className='info'>Description</p>
                            </div>
                        </div>
                        <div className="film__recom">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Actors</h4>
                                <h4 className='info'>Time</h4>
                                <p className='info'>Description</p>
                            </div>
                        </div>
                        <div className="film__recom">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Actors</h4>
                                <h4 className='info'>Time</h4>
                                <p className='info'>Description</p>
                            </div>
                        </div>
                        <div className="film__recom">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Actors</h4>
                                <h4 className='info'>Time</h4>
                                <p className='info'>Description</p>
                            </div>
                        </div>
                </div>
            </div>

    </div>
  )
}

export default OneResult