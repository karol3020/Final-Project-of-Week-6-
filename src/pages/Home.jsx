import React from 'react'
import './Home.css'
// import Contactform from '../components/Contactform'
import BatmanLogo from '../assets/batman.png'

function Home() {

return (
    <div className='container' >

                 {/* <Contactform /> */}
        <main className='homepage'>
            <h1 className='hompage__title' >If you are a Batman fan you'r in a right place. Here you can search for every single film with our Batsy. </h1>

            <h3 className='hompage__sub--title' >
                Enjoy !!
            </h3>
            <div className="search__button">
                <button className='batman'>
                    <img 
                    src={BatmanLogo}
                    className='batman__logo'
                    alt='' />
                    {/* <span>Search Now</span> */}
                </button>
                <input 
                className='search__input' 
                placeholder='Search Here Robin !!!'
                type="text" />
            </div>
        </main>
    </div>
  )
}

export default Home