import { NavLink } from "react-router-dom";

export const CountryCard = ({curCountry})=>{
  const {name, flags, capital, population, region} = curCountry

  return (
    <li>
      <figure>
        <img src={flags.svg} alt={flags.alt} />
      </figure>
      <h2> {name.common.length > 10? name.common.slice(0, 10) + '..' : name.common } </h2>
      <p><span className="dimmed-texts">Population:</span> {population.toLocaleString()} </p>
      <p><span className="dimmed-texts">Region:</span> {region} </p>
      <p><span className="dimmed-texts">Capital:</span> {capital} </p>
      <div><NavLink to={`/country/${name.common}`} ><button>Read More</button></NavLink></div>
    </li>
  );
}