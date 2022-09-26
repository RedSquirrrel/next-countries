import { useEffect, useState } from 'react';
import Countries from '../components/Countries/Countries';
import Input from '../components/Input/Input';
import Scroll from '../components/Scroll/Scroll';
import Select from '../components/Select/Select';
import { getAllCoutriesVersionTwo } from '../helpers/api-utils';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { allCountries } = props;

  const [searchByName, setSearchByName] = useState('');
  const [selectedByRegion, setSelectedByRegion] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const inputSelection = allCountries.filter(country => country.name.toLowerCase().includes(searchByName.toLowerCase()));
    setFilteredCountries(inputSelection);
  }, [searchByName, allCountries]);

  useEffect(() => {
    const selectionByRegion = allCountries.filter(country => country.region.includes(selectedByRegion));
    setFilteredCountries(selectionByRegion);
  }, [allCountries, selectedByRegion]);

  useEffect(() => {
    const searchFromFilteredRegion = allCountries.filter(country => country.region.includes(selectedByRegion));
    const filteredResult = searchFromFilteredRegion.filter(country => country.name.toLowerCase().includes(searchByName.toLowerCase()));
    setFilteredCountries(filteredResult);
    if (selectedByRegion === 'All Regions') {
      const inputSearch = allCountries.filter(country => country.name.toLowerCase().includes(searchByName.toLowerCase()));
      setFilteredCountries(inputSearch);
    }
  }, [allCountries, selectedByRegion, searchByName]);

  return (
    <div>
      <div className={styles.inputs}>
        <Input setSearchByName={setSearchByName} />
        <Select allCountries={allCountries} selectedByRegion={selectedByRegion} setSelectedByRegion={setSelectedByRegion} />
      </div>
      <Scroll>
        <Countries filteredCountries={filteredCountries} />
      </Scroll>
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

