import React from 'react'
import './SelectsStyles.css'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'


import SelectsImg from '../../components/selectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={image1} text='el tunco' />
                <SelectsImg bgImg={image2} text='pital' />
                <SelectsImg bgImg={image3} text='decameron' />
                <SelectsImg bgImg={image4} text='volcan' />
            </div>

        </div>
    )
}

export default Selects
