import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/Zumbido - 23334.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>¿TU PRIMER VIAJE?</h1>
                <h2>atrevete a disfrutar de aventuras</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
