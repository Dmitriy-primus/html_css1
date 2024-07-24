import styles from "./ModalHeader.module.css";
import close from "./../source/close.svg";

const ModalHeader = (props) => {
  return (
    <div className={styles.award}>
      <p className={styles.p_award}>In god We trust</p>
      <img
        onClick={props.closeModal}
        className={styles.image}
        src={close}
        alt="close"
      />
    </div>
  );
};

export default ModalHeader;
