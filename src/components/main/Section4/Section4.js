import Card from "./Card";
import styles from "./Section4.module.css";

const dataCard = [
  {
    price: 24,
    title: "Webflow Basics",
    img: "/card-1.png",
  },
  {
    price: 16,
    title: "Webflow Interections Masterclass",
    img: "/card-2.png",
  },
  {
    price: 38,
    title: "Advancet CMS and Integrations",
    img: "/card-3.png",
  },
];

const Section4 = () => {
  const descriptionCard = dataCard.map((item) => (
    <Card title={item.title} price={item.price} img={item.img} />
  ));
  return (
    <div className={styles.about_bg}>
      <div className={styles.container}>
        <section className={styles.popular}>
          <div className={styles.popular_content}>
            <a target="_blank" href="#" className={styles.popular_link}>
              Trending
            </a>
            <h5>The most popular cources</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              id quasi neque maiores nesciunt temporibus laudantium in, corporis
              libero alias asperiores, numquam beatae consectetur, suscipit
              cumque debitis cum reprehenderit rem!
            </p>
          </div>
          <div className={styles.catalogue}>{descriptionCard}</div>
        </section>
      </div>
    </div>
  );
};

export default Section4;
