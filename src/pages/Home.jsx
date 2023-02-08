import React, { useEffect, useState } from 'react'
import './Home.css'
import Contactform from '../components/Contactform'
import Navbar from '../components/Navbar'


function Home() {

return (
    <div className='container' >
                <Navbar />
                <Contactform />
        <main className='homepage'>
            <h1 className='hompage__title' >If you are a Batman fan you'r in a right place. Here you can search for every single film with our Batsy. </h1>

            <h3 className='hompage__sub--title' >
                Enjoy !!
            </h3>
            <div className="input__container">
                <input 
                className='search__input' 
                placeholder='Search Here Robin !!!'
                type="text" />
            </div>
            <div className="searchbutton">
                <button>
                    <span>Search Now</span>
                </button>
            </div>
        </main>
    </div>
  )
}

export default Home