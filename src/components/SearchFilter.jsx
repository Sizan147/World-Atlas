export const SearchFilter = ({search, handleFilter, handleSearch, handleSort })=>{

  return(
    <>
      <section className="search-section">
        <div className="search-container container">
          <input type="search" value={search} placeholder="Search..." onChange={handleSearch}/>
          <button onClick={()=> handleSort('asc')} >Asc</button>
          <button onClick={()=> handleSort('dsc')} >Desc</button>
          <select name="region" id="search-option" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </section>
    </>
  )
}