import Image from 'next/image';
import classes from './Select.module.css';

const Select = ({ allCountries, handleSearchByRegion, selectedByRegion, handleOpen, isClose }) => {
  const allRegions = allCountries.map(r => r.region);
  const removeDuplicatesRegion = new Set(allRegions);
  const regions = [...removeDuplicatesRegion];

  return (
    <div className={classes.container}>
      <div className={classes.select} onClick={handleOpen}>
        <p>{selectedByRegion || 'Filter by Region'}</p>
        <Image src={`${!isClose ? '/icons/chevron-down.svg' : '/icons/chevron-up.svg'}`} alt='chevron icon' width={20} height={20} />
      </div>
      <div className={classes.selectBody} style={isClose ? { opacity: 0 } : { opacity: 1 }}>
        {!isClose &&
          regions.map((region, index) => (
            <p key={index} onClick={handleSearchByRegion}>
              {region}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Select;
