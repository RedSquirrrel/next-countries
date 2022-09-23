import { useState } from 'react';
import Countries from '../components/Countries/Countries';
import Input from '../components/Input/Input';
import Scroll from '../components/Scroll/Scroll';
import Select from '../components/Select/Select';
import { getAllCoutriesVersionTwo } from '../helpers/api-utils';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { allCountries } = props;

  const [searchByName, setSearchByName] = useState('');
  const [selectedByRegion, setSelectedByRegion] = useState(null);
  const [isClose, setIsClose] = useState(true);
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

  const handleSearchByRegion = e => {
    setSelectedByRegion(e.target.textContent);
    setFilteredCountries(allCountries.filter(country => country.region.includes(e.target.textContent)));
    setIsClose(true);
  };

  const handleOpen = () => {
    setIsClose(!isClose);
  };

  return (
    <div>
      <div className={styles.inputs}>
        <Input value={searchByName} onChange={handleSearchByName} />
        <Select
          allCountries={allCountries}
          handleSearchByRegion={handleSearchByRegion}
          selectedByRegion={selectedByRegion}
          handleOpen={handleOpen}
          isClose={isClose}
        />
      </div>
      <Scroll>{allCountries.length && <Countries allCountries={allCountries} filteredCountries={filteredCountries} />}</Scroll>
    </div>
  );
}

export const getStaticProps = async () => {
  const allCountries = await getAllCoutriesVersionTwo();

  if (allCountries.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      allCountries,
    },
    revalidate: 60,
  };
};

