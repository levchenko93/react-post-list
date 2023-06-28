import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <h2>React 2023</h2>
         <span className={classes.footer}>
            <Link to="/" className={classes.footer__link_item}>
               Post Page
            </Link>
            <Link to="/other" className={classes.footer__link_item}>
               Other Page
            </Link>
            <Link to="/about" className={classes.footer__link_item}>
               About Page
            </Link>
         </span>
      </footer>
   );
};

export default Footer;
