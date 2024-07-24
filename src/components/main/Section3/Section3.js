import styles from "./Section3.module.css";
import right from "./../../source/right_arrow.svg";

const Section3 = () => {
  return (
    <div className={styles.about_bg}>
      <div className={styles.container}>
        <div className={styles.premium}>
          <div className={styles.premium_bg}></div>
          <div className={styles.premium_content}>
            <h3 className={styles.premium_title}>
              Premium cources from the indastry leaders
            </h3>
            <p className={styles.premium_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              itaque autem soluta magni rerum, culpa obcaecati. Adipisci ipsam
              ratione velit.
            </p>
            <div className={styles.premium_links}>
              <a target="_blunk" href="#" className={styles.premium_link}>
                Get started
              </a>
              <button className={styles.premium_button}>
                Learn more
                <img src={right} alt="right_arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.premium2}>
          <div className={styles.premium_bg2}></div>
          <div className={styles.premium_content}>
            <h3 className={styles.premium_title}>
              Easily find the perfect couse for you
            </h3>
            <p className={styles.premium_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              itaque autem soluta magni rerum, culpa obcaecati. Adipisci ipsam
              ratione velit.
            </p>
            <div className={styles.premium_links}>
              <a target="_blunk" href="#" className={styles.premium_link}>
                Get started
              </a>
              <button className={styles.premium_button}>
                Learn more
                <img src={right} alt="right_arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
