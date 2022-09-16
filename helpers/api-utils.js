// export const getAllCoutries = async () => {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const data = await response.json();
//   return data;
// };

export const getAllCoutriesVersionTwo = async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const data = await response.json();
  return data;
};

export async function getIndividualCountries(name) {
  const allCountries = await getAllCoutriesVersionTwo();
  return allCountries.find(country => country.name === name);
}

export async function findByAlphaCode(alphaCode) {
  const allCountries = await getAllCoutriesVersionTwo();

  if (!allCountries) return;
  return allCountries.find(country => country.alpha3Code === alphaCode);
}

// export async function findByName(name) {
//   const allCountries = await getAllCoutriesVersionTwo();

//   if (!allCountries) return;
//   return allCountries.find(country => country.name === name);
// }
