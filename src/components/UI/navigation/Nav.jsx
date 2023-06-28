import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
   return (
      <nav className={classes.nav}>
         <h2>React 2023</h2>
         <span className={classes.nav__link}>
            <Link to="/" className={classes.nav__link_item}>
               Post Page
            </Link>
            <Link to="/about" className={classes.nav__link_item}>
               About Page
            </Link>
         </span>
      </nav>
   );
};

export default Nav;
