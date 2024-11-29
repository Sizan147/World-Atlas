import { NavLink } from 'react-router-dom';
import world from '/public/images/world.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const HeroSection = ()=>{
  
  return(
    <>
      <section className="hero-section container grid grid-two--cols">
        <div className="infos">
          <h3>Explore the World, One Country at a time.</h3>
          <p>Discover the history, culture and beauty of every nation. Sort, search and filter through the countries to find the details you need.</p>
          <button><NavLink to={'/country'} className="explore-button">Start Exploring <FaRegArrowAltCircleRight /> </NavLink></button>
        </div>
        <figure>
          <img src={world} alt="world Atlas logo" />
        </figure>
      </section>  
    </>
  )
}