import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

import games_of_thrones from "../../images/games_of_thrones.jpg"
import avengers from '../../images/avengers.jpg'
import aladin from '../../images/aladin.jpg'
import spy from '../../images/spy.jpg'
import batman from '../../images/batman.jpg'
import matrix from '../../images/matrix.jpg'
import jhon_wick from '../../images/john_wick.jpg'

const Top_Rated = () => {
  const [totalMovies, setTotalMovies] = useState(0)

  useEffect(()=> {
    setTotalMovies($('.work-item').length)
    console.log("total movies: ", totalMovies);
  }, [])

  useEffect(()=> {
    console.log("total movies: ", totalMovies);
  }, [totalMovies])

  const lightboxSlideShow = (index) => {
    console.log(index)
    console.log($('.work-item'))
    const imgSrc = $('.work-item').eq(index).find('img').attr("src")
    const category = $('.work-item').eq(index).find('h4').text()

    console.log(imgSrc);
    console.log(category);

    $('.lightbox-img').attr('src', imgSrc)
    $('#movie-name').text(category)
    $('.lightbox-counter').html(totalMovies+"/"+(index+1))

    console.log("movie name: ",$('.lightbox-category .movie-name').val());
    console.log("movie name: ",$('#movie-name').val());
  }

  const onItemClick = (index) => {
    console.log("on movie click");
    const window_height= $(window).height()
    $('.lightbox-img').css("max-height", window_height+"px")
    console.log("movie index: ", index)
    $('.lightbox').addClass('open')
    lightboxSlideShow(index)
    $('.lightbox-close').on('click', function(){
        $('.lightbox').removeClass('open')
    })

    $('.lightbox .prev').on('click',function(){
        if(index == 0){
            index=totalMovies-1
        }else{
            index--
        }
        lightboxSlideShow(index)
    })

    $('.lightbox .next').on('click',function(){
        if(index+1 == totalMovies){
            index=0
        }else{
            index++
        }
        lightboxSlideShow(index)
    })
  }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h1>Top-Rated Movies</h1>
                </div>
            </div>
        </div>

        <div className='row item-list'>
            {/* top-rated movie start */}
            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(0)}>
                    <img src={games_of_thrones} alt='Games of Thrones'/>
                    <div className='overlay'>
                        <h4>Games of Thrones</h4>
                    </div>
                </div>
            </div>

            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(1)}>
                    <img src={matrix} alt='Matrix'/>
                    <div className='overlay'>
                        <h4>Matrix</h4>
                    </div>
                </div>
            </div>

            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(2)}>
                    <img src={avengers} alt='Avengers'/>
                    <div className='overlay'>
                        <h4>Avengers</h4>
                    </div>
                </div>
            </div>

            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(3)}>
                    <img src={jhon_wick} alt='Jhon Wick'/>
                    <div className='overlay'>
                        <h4>Jhon Wick</h4>
                    </div>
                </div>
            </div>

            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(4)}>
                    <img src={batman} alt='Batman'/>
                    <div className='overlay'>
                        <h4>Batman- The Dark Night Returns</h4>
                    </div>
                </div>
            </div>


            <div className='work-item'>
                <div className='work-item-inner' onClick={() => onItemClick(5)}>
                    <img src={spy} alt='Spy'/>
                    <div className='overlay'>
                        <h4>Spy</h4>
                    </div>
                </div>
            </div>
            {/* top-rated movie ends */}
        </div>
    </>
  )
}

export default Top_Rated