import Image from 'next/image';
import classes from './Card.module.css';

const Card = ({ country }) => {
  return (
    <div className={classes.container}>
      <div className={classes.flag}>
        <Image priority={true} src={country.flags.png} width={250} height={160} alt={country.name.common} />
      </div>
      <div className={classes.info}>
        <h1>{country.name}</h1>
        <p>
          Population: <span>{country.population.toLocaleString()} </span>{' '}
        </p>
        <p>
          Region:<span>{country.region} </span>{' '}
        </p>
        <p>
          Capital: <span>{country.capital ? country.capital : 'No Capital Information'} </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default Card;
