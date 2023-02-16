import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'
import Search from '@mui/icons-material/Search';
import { useParams } from 'react-router-dom'
import Filmsrecom from '../components/Filmsrecom';

function Results() {

    const {title} = useParams()
    const [films , setFilms] = useState([])
    const [loading , setLoading] = useState(true)
    const [searchTitle, setSearchTitle] = useState(title)

    async function fetchFilms(filmTitle) {
        setLoading(false)
        const {data} = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=${filmTitle || title}`)
        setFilms(data)
    }
    
    useEffect(() => {
            fetchFilms()
        } , [])

    function onSearch() {
        console.log(searchTitle)
        fetchFilms(searchTitle)
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
                                <div className="film"
                                 key={index} 
                                 >
                    <div className="film__title">
                        <div className="film__title--skeleton"></div>
                    </div>
                    <div className="film__img">
                     <p className="film__img--skeleton"></p>
                    </div>
                </div>
                        ))
                    ) : (

                        films.Search?.map((film) => (
                            <div className="film"
                            key={film.id}>
                            <div className="film__title" 
                             >{film.Title}</div>
                             <div className="film__img">
                                <img src={film.Poster} />
                             </div>
                            </div>
                            ))
                    )
                }

                    </div>
                </span>
            </div>   
        </div>
        <Filmsrecom className='space' />
    </div>
  )
}

export default Results