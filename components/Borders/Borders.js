import { useEffect, useState } from 'react';
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
      <a href={`/${borderCountries.name}`}>
        <span>{borderCountries.name}</span>
      </a>
    </>
  );
};

export default Borders;
