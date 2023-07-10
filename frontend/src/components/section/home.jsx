import React from 'react'
import scroll_down from '../../images/scroll_down.png'

const Home = () => {
  return (
    <>
      <div className='shape-01'>
        
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='home-content'>
            <h4>Download your favourite Movie in just a click</h4>
            <h2>Welcome to MyMovieMania</h2>
          </div>
        </div>

        {/* scroll down */}
        <a href='#about' className='scroll-down'>
        <i className="fa fa-5x fa-angle-double-down down-arrow" aria-hidden="true"></i>
          {/* <img src={scroll_down} alt='scroll-down'/> */}
        </a>
      </div>
    </>
  )
}

export default Home