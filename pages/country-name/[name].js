import { getIndividualCountries, getAllCoutriesVersionTwo } from '../../helpers/api-utils';
import Details from '../../components/Details/Details';

const CountryDetailPage = ({ country }) => {
  return (
    <div>
      <Details country={country} />
    </div>
  );
};

export async function getStaticProps(context) {
  const countryName = context.params.name;

  const country = await getIndividualCountries(countryName);
  return {
    props: {
      country,
    },
  };
}

export async function getStaticPaths() {
  const countries = await getAllCoutriesVersionTwo();

  const paths = countries.map(country => ({ params: { name: country.name } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default CountryDetailPage;
