import Button from '../Button/Button';
import Image from 'next/image';
import Borders from '../Borders/Borders';
import classes from './Details.module.css';

const Details = ({ country }) => {
  const splittedLanguages = country.languages
    .map(l => l.name)
    .toLocaleString()
    .split(',')
    .join(', ');

  return (
    <div className={classes.container}>
      <div className={classes.backBtn}>
        <Button link={'/'}>
          <span>Back</span>
        </Button>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.flag}>
          <div>
            <Image src={country.flags.png} width={560} height={400} />
          </div>
        </div>
        <div className={classes.allInformation}>
          <h1>{country.name}</h1>
          <div className={classes.info}>
            <div className={classes.left}>
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital ? country.capital : 'No Capital Information'}</span>
              </p>
            </div>
            <div className={classes.right}>
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{country.currencies ? country.currencies[0].name : 'No Information'}</span>
              </p>
              <p>
                Languages: <span>{splittedLanguages}</span>
              </p>
            </div>
          </div>
          <div className={classes.borders}>
            <p>Border Countries:</p>
            {country.borders ? (
              country.borders.map((borderCode, index) => (
                <span key={index} className={classes.bordersValues}>
                  <Borders borderCodes={borderCode} />
                </span>
              ))
            ) : (
              <span>No Border</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
