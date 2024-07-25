import styles from "./Main.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import { ContextVideoProvider } from "../../context/ContextVideo";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";

const Main = () => {
  return (
    <main className={styles.main}>
      <ContextVideoProvider>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </ContextVideoProvider>
    </main>
  );
};

export default Main;
