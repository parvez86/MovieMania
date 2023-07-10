import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/section/home';
import About from './components/section/about';
import Categories from './components/section/categories';
import Top_Rated from './components/section/top_rated';
import Contact from './components/section/contact';
import Footer from './components/section/footer';
import $ from 'jquery'
import { useEffect, useState } from 'react';
import 'jquery-ui-dist/jquery-ui.css';
/*
package.json:

"eslintConfig": {
  "extends": [
    // "react-add jqueryapp",
    "react-app/jest"
  ]
}
*/
function App() {
  return (
    <div className="App">

      {/* <div className='preloader'>
        <div className='loader'>
        </div>
      </div> */}
      {/* header section */}
      <header className='header'>
        <Navbar/>
      </header>
      {/* header - end */}

      {/* home section */}
      <section className='home-section' id='home'>
        <Home/>
      </section>
      {/* home-end */}

      {/* about-section */}
      <section className='about-section' id="about">
        <About/>
      </section>
      {/* about-end */}

      {/* categories-section */}
      <section className='service-section' id="categories">
        <Categories/>
      </section>
      {/* categories-end */}

       {/* categories-section */}
       <section className='work-section' id="top-rated">
        <Top_Rated/>
      </section>
      {/* categories-end */}

      {/* contact-section */}
      <section className='contact-section' id="contact">
        <Contact/>
      </section>
      {/* contact-end */}
      <section className='footer' id='footer'>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
