import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Navigation.module.css';

const Navigation = () => {
  const [light, setLight] = useState(false);

  const handleMode = () => {
    setLight(!light);
  };

  return (
    <header className={classes.nav_container}>
      <nav>
        <ul className={classes.nav_list}>
          <Link href={'/'}>
            <li className={classes.where}>Where in the world?</li>
          </Link>
          <li className={classes.mode} onClick={handleMode}>
            <Image src={`${!light ? '/icons/moon.svg' : '/icons/sun.svg'}`} width={25} height={25} />
            <span>{`${!light ? 'Dark Mode' : 'Light Mode'}`}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
