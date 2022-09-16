import { useState } from 'react';
import Countries from '../components/Countries/Countries';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';
import { getAllCoutriesVersionTwo } from '../helpers/api-utils';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { allCountries } = props;

  const [searchByName, setSearchByName] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(allCountries);

  const handleSearchByName = e => {
    setSearchByName(e.target.value);
    setFilteredCountries(
      allCountries.filter(
        country =>
          country.name.toLowerCase().includes(e.target.value) ||
          country.name.toUpperCase().includes(e.target.value) ||
          country.name.includes(e.target.value)
      )
    );
  };

  return (
    <div>
      <div className={styles.inputs}>
        <Input value={searchByName} onChange={handleSearchByName} setSearchByName={setSearchByName} />
        <Select />
      </div>
      {allCountries.length && <Countries allCountries={allCountries} filteredCountries={filteredCountries} />}
    </div>
  );
}

export const getStaticProps = async () => {
  const allCountries = await getAllCoutriesVersionTwo();

  return {
    props: {
      allCountries,
    },
  };
};

