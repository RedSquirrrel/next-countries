import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Navigation.module.css';

const Navigation = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    setTheme(localTheme);
  }, [theme]);

  const handleMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <header className={classes.nav_container}>
      <nav>
        <ul className={classes.nav_list}>
          <Link href={'/'}>
            <li className={classes.where}>Where in the world?</li>
          </Link>
          <li className={classes.mode} onClick={handleMode}>
            <Image src={`${theme === 'dark' ? '/icons/moon.svg' : '/icons/sun.svg'}`} width={25} height={25} alt='' />
            <span>{`${theme === 'dark' ? 'Dark Mode' : 'Light Mode'}`}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
