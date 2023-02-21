import React, { useEffect, useState } from 'react'
import './OneResult.css'
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Filmsrecom from '../components/Filmsrecom';
import Contactform from '../components/Contactform';


function OneResult() {

    let navigate = useNavigate()

    const {imdbID} = useParams()
    console.log(imdbID)
    const [ films, setFIlms] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchPosts() {
        setLoading(false)
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=2d8b895b&i=${imdbID}`)
        setFIlms(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


  return (
      <div>
        <Contactform />
        <div className="container">
            <header className='header__container' >
                <div className='header__back' >
                    <div className='header__name'onClick={() => navigate('/results')}>
                    <KeyboardBackspace onClick={() => navigate('/results')} />
                    <h1 className='cursor' >
                    Back to Cave
                    </h1>
                </div>

                </div>
            </header>
        </div>

        <div className="container">
            <div className="film__box">
                {
                    loading ? (
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
            ) : ( 
                        <>
                            <div className="img__box" key={films.id}>
                                <img src={films.Poster} alt="" />
                            </div>
                            <div className="img__info--box">
                                <h1 className='info'>{films.Title}</h1>
                                <h2 className='info'>{films.Actors}</h2>
                                <h5 className='info'>Director: {films.Director}</h5>     
                                <h5 className='info'>Runtime: {films.Runtime}</h5>     
                                <h5 className='info'>Language: {films.Language}</h5>     
                                <h5 className='info'>Plot: {films.Plot}</h5>     
                                <h5 className='info'>Released: {films.Released}</h5>     
                            </div>       
                         </>
            )
        }   
            </div>
        </div>

        <Filmsrecom />

    </div>
  )
}

export default OneResult