import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Filmsrecom.css'

function Filmsrecom() {
    
    let navigate = useNavigate()

    const [recentfilms, setrecentFilm] = useState([])
    const [loading , setLoading] = useState(false)

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
                   recentfilms.Search?.slice(6,10).map((film) => (
                       <div className="film2"
                       onClick={() => navigate('/film')}
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
                }
            </div>
        </div>
    </div>
  )
}

export default Filmsrecom