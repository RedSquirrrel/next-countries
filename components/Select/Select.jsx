import { useState } from 'react';
import classes from './Select.module.css';

const Select = ({ allCountries, selectedByRegion, setSelectedByRegion }) => {
  const [isClose, setIsClose] = useState(true);
  const allRegions = allCountries.map(r => r.region);
  const removeDuplicatesRegion = new Set(allRegions);
  const regions = [...removeDuplicatesRegion, 'All Regions'];

  const handleSearchByRegion = e => {
    setSelectedByRegion(e.target.textContent);
    setIsClose(!isClose);
  };

  const handleOpen = () => {
    setIsClose(!isClose);
  };

  return (
    <div className={classes.container}>
      <div className={classes.select} onClick={handleOpen}>
        <p>{selectedByRegion || 'Filter by Region'}</p>
        <span className={classes.chevron} style={isClose ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }}></span>
      </div>
      <div className={classes.selectBody} style={isClose ? { opacity: 0 } : { opacity: 1 }}>
        {!isClose &&
          regions.map((region, index) => {
            return (
              <p key={index} onClick={handleSearchByRegion}>
                {region}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Select;
