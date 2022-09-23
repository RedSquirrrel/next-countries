import Link from 'next/link';
import classes from './Button.module.css';

const Button = props => {
  console.log('%c CLASSES FROM BUTTOM COMP', 'color: green', classes);
  const btnClasses = classes.btn || props.className;
  const linkClasses = classes.btn && props.className;

  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={linkClasses}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
