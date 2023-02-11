import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'
import { useParams } from 'react-router-dom'
import Search from '@mui/icons-material/Search';

function Results() {



  return (
    <div className='container'>
        <section className='header'>
            <h2 className='header__text'>Browse Films</h2>
            <input
            className='header__input'
            placeholder='Over Here Nightwing'
            type="text"
            // value={searchTitle}
            // onChange={(event) => setSearchTitle(event.target.value)}
             />
             <button
            // onClick={() => onSearch()}
            className='input__button'
             ><Search /></button>
        </section>

        <div className='results'>
            <div className="box">
                <span>
                {/* {
                    loading ? (
                        new Array(10).fill(0).map((_, index) => (
                            <div className="post__container">
                            <div className="post" key={index} >
                    <div className="post__title">
                        <div className="post__title--skeleton"></div>
                    </div>
                    <div className="post__img">
                     <p className="post__img--skeleton"></p>
                    </div>
                </div>
                </div>
                        ))
                    ) : (
                        posts.map(data => (
                        <div className="post" key={data} >
                        <div className="post__title">{data.Title}</div>
                        <p className="post__img">{data.Poster}</p>
                    </div>
                    ))
                    )
                } */}

                </span>
            </div>   
        </div>
    </div>
  )
}

export default Results