import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../layout/Loader";
import { CountryCard } from "../components/CountryCard";
import { SearchFilter } from "../components/SearchFilter";

export const Country = () => {
  const [isLoading, startTrans] = useTransition();
  const [countryData, setCountryData] = useState([]);
  const [ search, setSearch ] = useState('')
  const [filter, setFilter ] = useState('all')

  // Search and Filter ---------------------------------------
  const handleFilter = (e)=>{
    setFilter(e.target.value)
  }
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  const filteredData =
    countryData.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }).filter((curCountry) => {
      if (filter === "all") {
        return countryData;
      } else return curCountry.region.includes(filter);
    });
  
  // Getting Data -----------------------------------------------
  useEffect(() => {
    startTrans(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
      console.log(res.data[0])
    });
  }, []);

  // Sorting -----------------------------------------------------
  const handleSort = (value)=>{
    const sortedData = value === 'asc' ?
    [...countryData].sort((a, b)=> a.name.common.localeCompare(b.name.common)) : [...countryData].sort((a, b)=> b.name.common.localeCompare(a.name.common)) 
    setCountryData(sortedData)
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          countryData={countryData}
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          setCountryData={setCountryData}
          handleSort={handleSort}
        />
        <ul className="container country-container">
          {filteredData.slice(0, 20).map((curCountry, index) => {
            return <CountryCard curCountry={curCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
