import classes from './Scroll.module.css';

const Scroll = ({ children }) => {
  return <div className={classes.scroll_container}>{children}</div>;
};

export default Scroll;
