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
    const [ films, setFIlms] = useState([])
    const [loading, setLoading] = useState(true)
    // const [searchId, setSearchId] = useState()

    async function fetchPosts() {
        setLoading(false)
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=2d8b895b&i=tt0372784`)
        setFIlms(data)
        console.log(data)
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
                                        
                        films.title?.map((film) => (
                        <>
                            <div className="img__box" key={film.id}>
                                <img src={film.Poster} alt="" />
                            </div>
                            <div className="img__info--box">
                                <h2 className='info'>{film.Title}</h2>
                                <h4 className='info'>{film.Year}</h4>     
                                <h4 className='info'>{film.Type}</h4>     
                            </div>       
                         </>
                )) 
            )
        }   
            </div>
        </div>

        <Filmsrecom />

    </div>
  )
}

export default OneResult