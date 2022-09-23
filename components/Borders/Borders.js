import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { findByAlphaCode } from '../../helpers/api-utils';

const Borders = ({ borderCodes }) => {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const countryByCode = findByAlphaCode(borderCodes);
    countryByCode
      .then(resp => {
        if (borderCountries) {
          setBorderCountries(resp);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Button link={`/country-name/${borderCountries.name}`}>
        <span>{borderCountries.name}</span>
      </Button>
    </>
  );
};

export default Borders;
