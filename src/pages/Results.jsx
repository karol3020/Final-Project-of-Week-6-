import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Results.css'
import { useParams } from 'react-router'

function Results() {

    const params = useParams()
    console.log(params.id)

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTitle, setSearchTitle] = useState()

    function onSearch () {
        fetchPosts(searchTitle)
    }

    async function fetchPosts() {
        const {data} = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=2d8b895b&s=`
        )
        setPosts(data)
        setLoading(false)
    }
    
    useEffect(() => {
        // fetchPosts()
    } , [])

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
             />
             <button
            onClick={() => onSearch()}
             >Search</button>
        </section>

        <div className='results'>
            <div className="box">
                <span>
                {
                    loading ? (
                        new Array(10).fill(0).map((_, index) => (
                            <div className="post__container">
                            <div className="post" key={index} >
                    <div className="post__title">
                        <div className="post__title--skeleton"></div>
                    </div>
                    <div className="post__img">
                     <p className="post__img--skeleton"></p>
                    </div>
                </div>
                </div>
                        ))
                    ) : (
                        posts.map(post => (
                        <div className="post" key={post} >
                        <div className="post__title">{post}</div>
                        <p className="post__img">{post.image}</p>
                    </div>
                    ))
                    )
                }
                </span>
            </div>     
        </div>
    </div>
  )
}

export default Results