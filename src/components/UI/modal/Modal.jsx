import classes from './Modal.module.css';

const Modal = ({ children, title, onClose }) => {
   return (
      <>
         <div className={classes.modal} onClick={onClose} />
         <div className={classes.modalContent}>
            <h1>{title}</h1>
            {children}
         </div>
      </>
   );
};

export default Modal;
