import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.inputContainer}>
      <input type='text' placeholder='Search for a coutry...' />
    </div>
  );
};

export default Search;
