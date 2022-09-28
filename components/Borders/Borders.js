import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { findByAlphaCode } from '../../helpers/api-utils';

const Borders = ({ borderCodes }) => {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const countryByCode = findByAlphaCode(borderCodes);
    countryByCode
      .then(resp => {
        setBorderCountries(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }, [borderCodes]);

  return (
    <>
      <Button link={`/countryName/${borderCountries.name}`}>
        <span>{borderCountries.name}</span>
      </Button>
    </>
  );
};

export default Borders;
