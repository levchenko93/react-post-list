import classes from './Button.module.css';
const Button = ({ children, ...rest }) => {
   return (
      <button {...rest} className={classes.post__btn}>
         {children}
      </button>
   );
};

export default Button;
