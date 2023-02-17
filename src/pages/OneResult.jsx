import React, { useEffect, useState } from 'react'
import './OneResult.css'
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function OneResult() {

    // const {imdbID} = useParams()
    const [ films, setFIlms] = useState([])
    const [loading, setLoading] = useState(true)
    // const [searchId, setSearchId] = useState()

    async function fetchPosts() {
        setLoading(false)
        const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=batman`)
        // console.log(data)
        setFIlms(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


  return (
      <div>
        <div className="container">
            <header className='header__container' >
                <div className='header__back' >
                    <h1 className='header__name'>
                    
                    <KeyboardBackspace />
                    Back to Cave
                    </h1>

                </div>
            </header>
        </div>


        {
            loading ? (
                <div className="container">
                <div className="film__box--skeleton">
                   <span className='--spa:1'>l</span>
                   <span className='--spa:2'>o</span>
                   <span className='--spa:3'>a</span>
                   <span className='--spa:4'>d</span>
                   <span className='--spa:5'>i</span>
                   <span className='--spa:6'>n</span>
                   <span className='--spa:7'>g</span>
                   <span className='--spa:8'>.</span>
                   <span className='--spa:9'>.</span>
                   <span className='--spa:10'>.</span>
                </div>
            </div>
            ) : (
                films.Search?.map((film) => (
                    
                    <div className="container">
                        <div className="film__box">
                            <div className="img__box">
                                <img src={film.Poster} alt="" />
                            </div>
            
                            <div className="img__info--box">
                                <h2 className='info'>{film.Title}</h2>
                                <h4 className='info'>{film.Year}</h4>     
                            </div>
                        </div>
                    </div>            
                        ))
               
            )
        }   

      
            <div className="films__recom">
                <div className="box__films">
                    <div className="box__film">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Time</h4>
                            </div>
                    </div>
                    <div className="box__film">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Time</h4>
                            </div>
                    </div>
                    <div className="box__film">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Time</h4>
                            </div>
                    </div>
                    <div className="box__film">
                            <div className="film__poster">
                                IMG
                            </div>
                            <div className="film__info">
                                <h2 className='info'>Title</h2>
                                <h4 className='info'>Year</h4>
                                <h4 className='info'>Time</h4>
                            </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default OneResult