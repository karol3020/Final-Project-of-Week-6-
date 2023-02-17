import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Contactform from '../components/Contactform'
import BatmanLogo from '../assets/batman.png'

function Home() {

    let navigate = useNavigate()

    const [searchTitle, setSearchTitle] = useState([])

return (
    <div className='container' >

                 <Contactform />
        <main className='homepage'>
            <h1 className='hompage__title' >If you are a Batman fan you'r in a right place. Here you can search for every single film with our Batsy. </h1>

            <h3 className='hompage__sub--title' >
                Enjoy !!
            </h3>
            <div className="search__button">
                <input 
                className='search__input' 
                placeholder='Search Here Robin !!!'
                type="text"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        navigate('/results')
                    }
                }}
                />
                
                <button className='batman'>
                    <img 
                    src={BatmanLogo}
                    className='batman__logo'
                    alt='' />
                </button>
            </div>
        </main>
    </div>
  )
}

export default Home