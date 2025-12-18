import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first country by clicking on the map" />;

  const countriesArray = cities.reduce((accumulator, current) => {
    if (!accumulator.map((item) => item.country).includes(current.country))
      return [
        ...accumulator,
        { country: current.country, emoji: current.emoji },
      ];
    else return accumulator;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countriesArray.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
