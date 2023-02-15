import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'
import Search from '@mui/icons-material/Search';

function Results() {

    const [films , setFilms] = useState([])
    const [loading , setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState()

    useEffect(() => {
        async function fetchFilms() {
            setLoading(true)
            const {data} = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=batman")
            setFilms(data)
        }
        fetchFilms()
    } , [])

    function onSearch() {
        console.log("search")
    }

    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch()
        }
    }

  return (
    <div className='container'>
        <section className='header'>
            <h2 className='header__text'>Browse Films</h2>
            <input
            className='header__input'
            placeholder='Over Here Nightwing'
            type="text"
            value={searchTitle}
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyPress={(event) => onSearchKeyPress(event.key)}
             />
             <button
            onClick={() => onSearch()}
            className='input__button'
             ><Search /></button>
        </section>

        <div className='results'>
            <div className="box">
                <span>
                    <div className="film__container">

                {
                    loading ? (
                        new Array(6).fill(0).map((_, index) => (
                            <div className="film" key={index} >
                    <div className="film__title">
                        <div className="film__title--skeleton"></div>
                    </div>
                    <div className="film__img">
                     <p className="film__img--skeleton"></p>
                    </div>
                </div>
                        ))
                    ) : (
                        new Array(6).fill(0).map((_, index) => (
                        films.Search?.map((film) => (
                            <div className="film" key={index} >
                            <div className="film__title">{film.Title}</div>
                            <p>{film.Poster}</p>
                            </div>
                            ))
                        ))
                    )
                }

                    </div>
                </span>
            </div>   
        </div>
    </div>
  )
}

export default Results