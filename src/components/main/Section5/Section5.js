import styles from "./Section5.module.css";
import student from "./../../source/sec5-bg.png";

const Section5 = () => {
  return (
    <section className={styles.student}>
      <div className={styles.student_info}>
        <div className={styles.student_description}>
          <button className={styles.student_btn1}>Ознакомиться</button>
          <h2 className={styles.student_title}>
            Join more then 17,000+ students oll over the world
          </h2>
          <p className={styles.student_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aperiam assumenda sapiente consequatur fuga dignissimos mollitia
            neque, reiciendis quia, doloribus a animi est, quas officia. Eaque
            ea vero voluptatem vitae.
          </p>
          <button className={styles.student_btn2}>Запись на курс</button>
        </div>
      </div>
      <div className={styles.student_img}>
        <img className={styles.student_foto} src={student} />
      </div>
    </section>
  );
};

export default Section5;
