import styles from "./ContentInfo.module.css";
import { useState, useContext } from "react";
import play from "./../../source/play.svg";
import image2 from "./../../source/image2.png";
import image3 from "./../../source/image3.png";
import image4 from "./../../source/image4.png";
import image5 from "./../../source/image5.png";
import star from "./../../source/star.svg";
import half_star from "./../../source/half_star.svg";
import { ContextVideo } from "../../../context/ContextVideo";

const ContentInfo = (props) => {
  const context = useContext(ContextVideo);

  const onPlayVideoHendler = () => {
    context.setStateVideo(true);
  };

  return (
    <div className={styles.content_info}>
      <h1 className={styles.content_h1}>
        Believe in your dream and fly away to the sun
      </h1>
      <p className={styles.content_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className={styles.content_button}>
        <button className={styles.content_btn1}>Explore Course</button>
        <button onClick={onPlayVideoHendler} className={styles.content_btn2}>
          <p>Watch video</p>
          <img src={play} alt="play" />
        </button>
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviews_images}>
          <div className={styles.reviews_img}>
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/593/799/639/cat-grass-grey-wallpaper-preview.jpg"
              alt="img1"
            />
          </div>
          <div className={styles.reviews_img}>
            <img src={image2} alt="img2" />
          </div>
          <div className={styles.reviews_img}>
            <img src={image3} alt="img3" />
          </div>
          <div className={styles.reviews_img}>
            <img src={image4} alt="img4" />
          </div>
          <div className={styles.reviews_img}>
            <img src={image5} alt="img5" />
          </div>
        </div>
        <div className={styles.reviews_rating}>
          <img className={styles.star} src={star} alt="star" />
          <img className={styles.star} src={star} alt="star" />
          <img className={styles.star} src={star} alt="star" />
          <img className={styles.star} src={star} alt="star" />
          <img className={styles.star} src={half_star} alt="star" />
          <p className={styles.star_text}>From 3k+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
