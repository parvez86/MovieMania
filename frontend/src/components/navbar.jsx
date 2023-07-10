import React from 'react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [totalWorkItems, setTotalWorkItems] = useState(0)
  const [navToggleOff, setIsNavToggleOff] = useState(false)

  const onNavToggle = () => {
      $(".header .nav a").slideToggle();
      setIsNavToggleOff(!navToggleOff)
      // if(!navToggleOff){
      //   $(".home-section").css("margin-top", "68.5px")
      // }else{
      //   $(".home-section").css("margin-top", "277px")
      // }
  }
  useEffect(() => {
    setTotalWorkItems($('.work-item').length)
    // if($(window).width() < 768){
    //   setIsNavToggleOff(true)
    //   $(".header .nav").slideToggle();
    // }
  },[])
  useEffect(() => {
    console.log('work-item legth: ', totalWorkItems)
  }, [totalWorkItems])

  useEffect(() => {
    console.log("nav-toggle: ", navToggleOff);
  },[navToggleOff])

  useEffect(() => {
    $(window).on("scroll", function(){
      if($(this).scrollTop()> 100){
        $('.header').addClass("fixed");
      }else{
        $(".header").removeClass("fixed");
      }
    })
  }, [$(this).scrollTop()])
  useEffect(() => {
    console.log("scroll-top: ", $(this).scrollTop());
  },[$(this).scrollTop()])
  return (
   <>
      <div className='container'>
        <div className="row justify-content-between align-items-center">
          <div className='brand-name'>
            <a href='#'>MyMovieMania</a>
          </div>
          <div className='nav-toggle' onClick={() => onNavToggle()}>
            <span></span>
          </div>
          <nav className='nav'>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#categories'>Categories</a></li>
              <li><a href='#top-rated'>Top-Rated</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
   </>
  )
}

export default Navbar 