import countryFacts from "../api/countryDataApi.json";
import { CountryFacts } from "./CountryFacts";

export const AboutSection = () => {
  return (
    <>
      <h2 className="about-heading">Here are the Interesting Facts <br /> we're proud of</h2>
      <section className="about-section container grid">
        {countryFacts.map((curCountry) => {
          return <CountryFacts key={curCountry.id} data={curCountry} />;
        })}
      </section>
    </>
  );
};
