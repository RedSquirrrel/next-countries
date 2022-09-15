import Link from 'next/link';
import Card from '../Card/Card';
import classes from './Countries.module.css';

const Countries = ({ allCountries }) => {
  return (
    <div className={classes.cardsContainer}>
      {allCountries.map((country, index) => (
        <Link key={country.name} href={`/${country.name}`}>
          <a href={`/${country.name}`}>
            <Card country={country} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
