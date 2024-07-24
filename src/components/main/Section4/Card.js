import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.catalogue_card}>
      <div className={styles.catalogue_info}>
        <button className={styles.catalogue_buttonInfo}>Beginer</button>
        <h3 className={styles.catalogue_title}>{props.title}</h3>
        <p className={styles.catalogue_price}>${props.price} USD</p>
      </div>
      <div className={styles.catalogue_image}>
        <span>
          <button className={styles.catalogue_buttonImage}>
            Erroll Course
          </button>
        </span>
        <span>
          <img
            className={styles.catalogPhoto}
            src={props.img}
            alt="photo_work"
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
