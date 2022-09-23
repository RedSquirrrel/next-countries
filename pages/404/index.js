import Button from '../../components/Button/Button';
import classes from './404.module.css';

const NotFoundPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>:( 404</h1>
        <p>Your PC is okay, but the page not found.</p>
        <p>The link you followed is probably broken, or the page has been removed.</p>
      </div>
      <div className={classes.goHomeBtn}>
        <span>Don&lsquo;t worry. </span>
        <span>
          <Button link={'/'}>Return to Home Page</Button>
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
