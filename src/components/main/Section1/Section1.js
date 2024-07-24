import styles from "./Section1.module.css";
import ContentInfo from "./ContentInfo";
import ContentVideo from "./ContentVideo";

const Section1 = () => {
  // const isPlayVideo = (stayVideo) => {
  //   console.log("dddd");
  //   return stayVideo;
  // };

  // const playVideoHendler = useEffect(() => {
  //   isPlayVideo();
  // }, [stayVideo]);

  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ContentInfo />
          <ContentVideo />
        </div>
      </div>
      <p className={styles.main_title}>
        Trust is the best tool for maintaining a fruitful partnership
      </p>
    </section>
  );
};

export default Section1;
