import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'
import Search from '@mui/icons-material/Search';

function Results() {

    const [films , setFilms] = useState([])

    useEffect(() => {
        async function fetchFilms() {
            const {data} = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=batman")
            setFilms(data)
        }
        fetchFilms()
    } , [])

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

                    {films.map(Search => <div>{Search.Title}</div>)}

                    <div className="film">
                        <div className="film__title"> </div>
                            <div className="film__img"> </div>
                    </div>

                {/* {
                    loading ? (
                        new Array(10).fill(0).map((_, index) => (
                            <div className="film__container">
                            <div className="film" key={index} >
                    <div className="film__title">
                        <div className="film__title--skeleton"></div>
                    </div>
                    <div className="film__img">
                     <p className="film__img--skeleton"></p>
                    </div>
                </div>
                </div>
                        ))
                    ) : (
                        posts.map(data => (
                        <div className="film" key={data} >
                        <div className="film__title">{data.Title}</div>
                        <p className="film__img">{data.Poster}</p>
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