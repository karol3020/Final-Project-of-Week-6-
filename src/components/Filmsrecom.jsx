import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Filmsrecom.css'

function Filmsrecom() {
    
    const {imdbID} = useParams()

    const [recentfilms, setrecentFilm] = useState([])
    const [loading , setLoading] = useState(true)

    async function fetchrecomFilms() {
        setLoading(false)
        const {data} = await axios.get ("https://www.omdbapi.com/?apikey=2d8b895b&s=batman")
        setrecentFilm(data)
        console.log(data)
    }
    
    useEffect(() => {
        fetchrecomFilms()
    }, [])

  return (
    <div className='space'>
                <h2>Recommendetions</h2>
         <div className="films__recom">
            <div className="box__films">
                   { 
                        loading ? (
                            new Array(1).fill(0).map((_, index) => (
                                    <div className="film2--skeleton"
                                    //  key={index} 
                                    >
                                    <div className="film__img2--skeleton">
                                        <h1>
                                            LOADING...    
                                        </h1>
                                    </div>
                                </div>
                            ))
                        ) : (

                             recentfilms.Search?.slice(6,10).map((film) => (
                       <div className="film2"
                       onClick={() => <Link to={`/film/${imdbID}`} />}
                       >
                        <div className="film__img2">
                       <img src={film.Poster} />
                       </div>
                       <div className="film__text2">
                       <h4>{film.Title}</h4>
                        <h4>{film.Year}</h4>
                    </div>
                </div>       
                ))
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Filmsrecom