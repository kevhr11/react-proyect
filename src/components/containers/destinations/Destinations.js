import React from 'react'
import './Destinations.css'

import image1 from '../../../assets/1.jpg'
import image2 from '../../../assets/2.jpg'
import image3 from '../../../assets/3.jpg'
import image4 from '../../../assets/4.jpg'
import Navbar from '../navbar/Navbar'


function Destinations() {
    return (
        
        <div name='destinations' className='destinations'>
    
            <div className="container">
                <h1>LAS MEJORES ATRACCIONES TURISTICAS</h1>
                <p>en nuestro pais</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={image1} alt="/"/>
                    <img src={image2} alt="/"/>
                    <img src={image3} alt="/"/>
                    <img src={image4} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations