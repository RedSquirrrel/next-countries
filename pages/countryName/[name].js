import { useRouter } from 'next/router';
import { getIndividualCountries, getAllCoutriesVersionTwo } from '../../helpers/api-utils';
import Details from '../../components/Details/Details';

const CountryDetailPage = ({ country }) => {
  const router = useRouter();

  if (router.isFallback || !country) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Details country={country} />
    </div>
  );
};

export async function getStaticProps(context) {
  const countryName = context.params.name;

  const country = await getIndividualCountries(countryName);

  if (!country) {
    return { notFound: true };
  }

  return {
    props: {
      country,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // const countries = await getAllCoutriesVersionTwo();

  const paths = [{ params: { name: 'Hungary' } }, { params: { name: 'Italy' } }];

  return {
    paths: paths,
    fallback: true,
  };
}

export default CountryDetailPage;
