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
    }
    
    useEffect(() => {
        fetchrecomFilms()
    }, [])

  return (
    <div className='space'>
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

export default Filmsrecom