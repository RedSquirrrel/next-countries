import Link from 'next/link';
import Card from '../Card/Card';
import classes from './Countries.module.css';

const Countries = ({ filteredCountries }) => {
  return (
    <div className={filteredCountries.length <= 3 ? classes.fewCardsContainer : classes.cardsContainer}>
      {filteredCountries &&
        filteredCountries.map((country, index) => (
          <Link key={country.name} href={`/country-name/${country.name}`}>
            <a href={`/country-name/${country.name}`}>
              <Card country={country} />
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Countries;
