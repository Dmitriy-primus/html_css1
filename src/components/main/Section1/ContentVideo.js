import styles from "./ContentVideo.module.css";
import Rain from "./../../source/Video/Rain.mp4";
import PosterRain from "./../../source/poster_Rain.jpg";
import drum from "./../../source/drum.svg";
import { useRef, useContext } from "react";
import { ContextVideo } from "../../../context/ContextVideo";

const ContentVideo = (props) => {
  const context = useContext(ContextVideo);
  const useRefVideo = useRef();

  const onPlayVideoHendler = () => {
    if (context.stateVideo) {
      useRefVideo.current.play();
    } else {
      return;
    }
  };
  onPlayVideoHendler();
  return (
    <div className={styles.content_video}>
      <video
        className={styles.content_rain}
        src={Rain}
        ref={useRefVideo}
        muted
        poster={PosterRain}
        loop
      >
        <source
          src="./../source/Video/Rain.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source
          src="./../source/Video/Rain.webm"
          type='video/webm; codecs="vp8, vorbis"'
        />
      </video>
      <img className={styles.content_video_bg} src={drum} alt="drum" />
    </div>
  );
};

export default ContentVideo;
