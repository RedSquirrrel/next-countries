import { useEffect, useState } from 'react';
import classes from './Input.module.css';

const Input = ({ setSearchByName }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearchByName(search);
  }, [search, setSearchByName]);

  return (
    <div className={classes.inputContainer}>
      <input type='text' placeholder='Search for a country...' value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  );
};

export default Input;
