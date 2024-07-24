import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.about_bg}>
      <div className={styles.container}>
        <section className={styles.about}>
          <a href="#" className={styles.link}>
            About us
          </a>
          <h2 className={styles.about_h2}>No-code education platform</h2>

          <p className={styles.about_description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus numquam debitis obcaecati autem amet dolore eaque earum
            nisi doloribus consectetur illo soluta, deserunt ducimus unde magnam
            commodi incidunt fuga accusamus!
          </p>
          <a href="#">
            <button className={styles.about_button}> About us</button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Section2;
