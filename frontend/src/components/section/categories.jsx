import React from 'react'
import games_of_thrones from "../../images/games_of_thrones.jpg"
import avengers from '../../images/avengers.jpg'
import aladin from '../../images/aladin.jpg'
import spy from '../../images/spy.jpg'
import batman from '../../images/batman.jpg'
import matrix from '../../images/matrix.jpg'
import jhon_wick from '../../images/john_wick.jpg'
const Categories = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h1>Categories</h1>
                </div>
            </div>

            <div className='row item-list'>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={games_of_thrones} alt="games of thrones"/>
                        <div className='overlay'>
                            <h3>Western</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={jhon_wick} alt='john-wick'/>
                        <div className='overlay'>
                            <h3>Mystrey</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={aladin} alt='aladin'/>
                        <div className='overlay'>
                            <h3>Drama</h3>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className='row'> */}
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={avengers} alt='avengers'/>
                        <div className='overlay'>
                            <h3>Fantasy</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={spy} alt='spy'/>
                        <div className='overlay'>
                            <h3>Comedy</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src={batman} alt='batman'/>
                        <div className='overlay'>
                            <h3>Animation</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='row'>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src=''/>
                        <div className='overlay'>
                            <h3>Western</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src=''/>
                        <div className='overlay'>
                            <h3>Western</h3>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-inner'>
                        <img src=''/>
                        <div className='overlay'>
                            <h3>Western</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Categories
