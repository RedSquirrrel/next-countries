import classes from './Input.module.css';

const Input = ({ value, onChange }) => {
  return (
    <div className={classes.inputContainer}>
      <input type='text' placeholder='Search for a country...' value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
