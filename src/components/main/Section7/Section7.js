import styles from "./Section7.module.css";
import circle1 from "./../../source/circle1.svg";
import circle2 from "./../../source/circle2.svg";
import circle3 from "./../../source/circle3.svg";
import circle4 from "./../../source/circle4.svg";
import work from "./../../source/work.png";

const Section7 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.teachers}>
        <div className={styles.teachers_content}>
          <a href="#" className={styles.teachers_link}>
            Benefits
          </a>

          <h2 className={styles.teachers_title}>
            Grow your knowlege from best teachers in the indastry
          </h2>
          <p className={styles.teachers_text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            laboriosam. Ex libero temporibus omnis, culpa laudantium, illo ullam
            vel placeat veniam autem sit voluptatibus eos quisquam dolor iure ea
            ipsam?
          </p>
        </div>
        <div className={styles.teachers_container}>
          <div className={styles.teachers_over}>
            <div className={styles.over_section}>
              <div className={styles.teachers_image}>
                <img src={circle1} alt="circle" />
              </div>
              <h3 className={styles.over_title}>Create himself</h3>
              <p className={styles.over_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, laboriosam. Ex libero temporibus omnis, culpa
                laudantium
              </p>
            </div>
            <div className={styles.over_section2}>
              <div className={styles.teachers_image}>
                <img src={circle2} alt="circle" />
              </div>
              <h3 className={styles.over_title}>Create himself</h3>
              <p className={styles.over_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, laboriosam. Ex libero temporibus omnis, culpa
                laudantium
              </p>
            </div>
          </div>
          <div className={styles.teachers_bg}>
            <img src={work} alt="work" className={styles.bg_foto} />
          </div>
          <div className={styles.teachers_over2}>
            <div className={styles.over_section}>
              <div className={styles.teachers_image}>
                <img src={circle3} alt="circle" />
              </div>
              <h3 className={styles.over_title}>Create himself</h3>
              <p className={styles.over_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, laboriosam. Ex libero temporibus omnis, culpa
                laudantium
              </p>
            </div>
            <div className={styles.over_section2}>
              <div className={styles.teachers_image}>
                <img src={circle4} alt="circle" />
              </div>
              <h3 className={styles.over_title}>Create himself</h3>
              <p className={styles.over_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, laboriosam. Ex libero temporibus omnis, culpa
                laudantium
              </p>
            </div>
          </div>
        </div>

        <a className={styles.section7_link} href="#">
          Get started
        </a>
      </div>
    </section>
  );
};

export default Section7;
