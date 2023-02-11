import React from 'react'
import './OneResult.css'

function OneResult() {

  return (
    <div>
        <div class="container">
            
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

            <div className="films__recom">

            </div>

        </div>
    </div>
  )
}

export default OneResult