import Link from 'next/link';
import Card from '../Card/Card';
import classes from './Countries.module.css';

const Countries = ({ filteredCountries }) => {
  const displayCountries = filteredCountries.map(country => {
    return (
      <div key={country.name}>
        <Link key={country.name} href={`/countryName/${country.name}`}>
          <a>
            <Card country={country} />
          </a>
        </Link>
      </div>
    );
  });

  return (
    <div className={filteredCountries.length <= 3 ? classes.fewCardsContainer : classes.cardsContainer}>
      {filteredCountries.length >= 1 && displayCountries}
      {filteredCountries.length === 0 && <h1 className={classes.noCountry}>Please enter a valid country name</h1>}
    </div>
  );
};

export default Countries;
