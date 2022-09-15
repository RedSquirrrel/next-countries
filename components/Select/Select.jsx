import { useState } from 'react';
import Image from 'next/image';
import classes from './Select.module.css';

const Select = () => {
  const [isClose, setIsClose] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const handleOpen = () => {
    setIsClose(!isClose);
  };
  const handleSelect = value => () => {
    setSelectedRegion(value);
    setIsClose(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.select} onClick={handleOpen}>
        <p>{selectedRegion || 'Filter by Region'}</p>
        <Image src={`${!isClose ? '/icons/chevron-down.svg' : '/icons/chevron-up.svg'}`} alt='chevron icon' width={20} height={20} />
      </div>
      <div className={classes.selectBody} style={isClose ? { opacity: 0 } : { opacity: 1 }} as='style'>
        {!isClose &&
          regions.map((region, index) => (
            <p key={index} onClick={handleSelect(region)}>
              {region}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Select;
