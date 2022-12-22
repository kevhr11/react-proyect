import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/bosque.jpeg'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>destinos cerca de ti</h2>
                    <p></p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>EL IMPOSIBLE</h3>
                                <p>disfruta de aire fresco, sin contar la vista de inmurables mariposas que veras posarse en los arboles, mientras observas como sobrevuelan en el cielo aves de diferentes especies</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>Guias turisticos, transporte en auto, llaver de recuerdo y muchas cosas mas</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Search