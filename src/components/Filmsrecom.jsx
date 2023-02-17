import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Filmsrecom.css'

function Filmsrecom() {

    const [recentfilms, setrecentFilm] = useState([])
    const [loading , setLoading] = useState(false)

    async function fetchrecomFilms() {
        setLoading(false)
        const {data} = await axios.get ("https://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=batman")
        setrecentFilm(data)
        console.log(data)
    }
    
    useEffect(() => {
        fetchrecomFilms()
    }, [])

  return (
    <div className='space'>
         <div className="films__recom">
            <div className="box__films">
                
                   {
                   recentfilms.Search?.map((film) => (
                       <div className="film2">
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