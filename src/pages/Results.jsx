import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'

function Results() {

    const [posts, setPosts] = useState([])

    async function fetchPosts() {
        const {data} = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=batman`)
        setPosts(data)
        console.log({data})
    }

    useEffect(() => {
        fetchPosts()
    } , [])

  return (
    <div className='container'>
        <section className='header'>
            <h2 className='header__text'>Browse Films</h2>
            <input
            className='header__input'
            placeholder='Over Here Nightwing'
            type="text" />
        </section>

        <section className='results'>
            <div className="box">
                <span>
                    <div className="post__container">
                        <div className="post">
                            <img src='' alt="" />
                            <title></title>
                        </div>
                    </div>
                </span>
            </div>
        </section>
    </div>
  )
}

export default Results