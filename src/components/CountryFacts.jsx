export const CountryFacts = ({ data }) => {
  const { name, capital, population, interestingFact } = data;

  return (
    <>
      <div className="individual-country-facts">
        <h1> {name} </h1>
        <p><span style={{color: 'grey'}}>Capital:</span> {capital} </p>
        <p><span style={{color: 'grey'}}>Population:</span> {population.toLocaleString()} </p>
        <p><span style={{color: 'grey'}}>Interesting Fact:</span> {interestingFact} </p>
      </div>
    </>
  );
};
