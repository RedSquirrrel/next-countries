import Countries from '../components/Countries/Countries';
import Search from '../components/Search/Search';
import Select from '../components/Select/Select';
import { getAllCoutriesVersionTwo } from '../helpers/api-utils';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { allCountries } = props;

  return (
    <div>
      <div className={styles.inputs}>
        <Search />
        <Select />
      </div>
      <Countries allCountries={allCountries} />
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

