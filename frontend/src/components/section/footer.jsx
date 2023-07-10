import React from 'react'

const Footer = () => {
  return (
    <>
        <p className='copywright'>&copy; 2023 MyMovieMania</p>
        <div className='lightbox'>
            <div className='img-box'>
                <div className='lightbox-close'>
                    &times; 
                </div>
                <img src='' className='lightbox-img' alt='img1'/>
                <div className='ligthbox-caption'>
                    <div className='lightbox-category'>
                        <p className='.movie-name' id="movie-name"></p>
                    </div>

                    <div className='lightbox-counter'>
                        
                    </div>
                </div>
                <div className='lightbox-controls'>
                    <div className='prev'>
                        <i className="fa fa-3x fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div className='next'>
                        <i className="fa fa-3x fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer