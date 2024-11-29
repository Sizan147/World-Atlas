import { useNavigate, useParams } from "react-router-dom"
import { soloCountryData } from "../api/postApi"
import { useEffect, useState } from "react"
import { Loader } from "../layout/Loader"

export const SoloCountry = ()=>{
  const params = useParams()
  const navigate = useNavigate()
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState({})

  const handleBackClick = ()=>{
    navigate(-1)
  }

  const soloData = async ()=>{
    const res = await soloCountryData(params.name)
    console.log(res.data[0])
    setData(res.data[0])
    setLoading(false)
  }
  useEffect(()=>{
    soloData() 
  }, [])

  const {name, population, flags, capital, region, languages,  subregion, tld, currencies} = data

  if(loading) return <Loader/>
  else return(
    <section className="soloCountry-section">
      <div className="container soloCountry-container">
        <figure>
          <img src={flags.svg} alt={flags.alt} />
        </figure>
        <div className="information">
          <h2>{name.official}</h2>
          <p><span className="dimmed-texts">Native Name:</span> {Object.keys(name.nativeName).map((curKey)=> name.nativeName[curKey].common).join(", ")} </p>
          <p><span className="dimmed-texts">Population:</span> {population.toLocaleString()} </p>
          <p><span className="dimmed-texts">Region:</span> {region} </p>
          <p><span className="dimmed-texts">Sub Region:</span> {subregion} </p>
          <p><span className="dimmed-texts">Capital:</span> {capital} </p>
          <p><span className="dimmed-texts">Top Level Domain:</span> {tld} </p>
          <p><span className="dimmed-texts">Currencies:</span> {Object.values(currencies).map((curCurrency)=> curCurrency.name).join(", ")} </p>
          <p><span className="dimmed-texts">Languages:</span> {Object.values(languages).map((lang)=> lang).join(", ")} </p>
          <div className="button"><button onClick={handleBackClick}>Go Back</button></div>
        </div>
      </div>
    </section>
  )
}