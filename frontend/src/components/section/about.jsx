import React from 'react'
import video_img from '../../images/video_player2.png'


const About = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='img-box'>
                    <div className='shape-02'></div>
                    <img src={video_img} alt='video-image'/>
                </div>
            </div>

            <div className='about-content'>
                <div className='row'>
                    <div className='section-title'>
                        <h1>About Us</h1>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='stats'>
                    <div className='row'>
                        <div className='stats-box'>
                            <h2>150K+</h2>
                            <h5>Daily Downloads</h5>
                        </div>
                        <div className='stats-box'>
                            <h2>250K+</h2>
                            <h5>Movies Available</h5>
                        </div>
                        <div className='stats-box'>
                            <h2>1M+</h2>
                            <h5>Happy Clients</h5>
                        </div>
                    </div>
                </div>
                <a href='#contact' className='btn btn-01'>Contact Us</a>
            </div>
        </div>
    </>
  )
}

export default About