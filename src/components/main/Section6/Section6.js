import styles from "./Section6.module.css";
import contact from "./../../source/contacts_1vbc10e1xvsl.svg";
import graduate from "./../../source/graduate_1w3w0t1g91vc.svg";
import shield from "./../../source/shield_j7uo4d3h5dfy.svg";

const Section6 = () => {
  return (
    <section className={styles.learn}>
      <div className={styles.learn_column}>
        <div className={styles.learn_image}>
          <img src={contact} className={styles.learn_img} alt="contact" />
        </div>
        <h3 className={styles.learn_title}>Brouse our cources</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          laboriosam. Ex libero temporibus omnis, culpa laudantium, illo ullam
          vel placeat veniam autem sit voluptatibus eos quisquam dolor iure ea
          ipsam?
        </p>
      </div>
      <div className={styles.learn_column}>
        <div className={styles.learn_image}>
          <img src={graduate} className={styles.learn_img} alt="graduate" />
        </div>
        <h3 className={styles.learn_title}>Brouse our cources</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          laboriosam. Ex libero temporibus omnis, culpa laudantium, illo ullam
          vel placeat veniam autem sit voluptatibus eos quisquam dolor iure ea
          ipsam?
        </p>
      </div>
      <div className={styles.learn_column}>
        <div className={styles.learn_image}>
          <img src={shield} className={styles.learn_img} alt="shield" />
        </div>
        <h3 className={styles.learn_title}>Brouse our cources</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          laboriosam. Ex libero temporibus omnis, culpa laudantium, illo ullam
          vel placeat veniam autem sit voluptatibus eos quisquam dolor iure ea
          ipsam?
        </p>
      </div>
    </section>
  );
};

export default Section6;
