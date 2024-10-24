import Drop from "../../assets/icons/Drop";
import Button from "../../components/Button";
import styles from "./home.module.css";
import Slider from "../../components/Slider";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";

function Home() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Drop svgAttrs={{ width: "15", height: "28" }} />
        Pink Honey
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Never have another lonely night</h1>
        <p className={styles.description}>
          Swipe and start matching with AI companions that listen, understand,
          and de-stress you.
        </p>
        <Button
          onClick={() => console.log("Start button clicked!")}
          type="button"
          title="Start for Free"
          label="Click to start for free"
          variant="primary"
          fontSize={24}
          height={72}
          width={325}
        />
      </main>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div className={styles.feedback}>
        {[1, 2, 3].map((item) => (
          <Feedback />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Home;
