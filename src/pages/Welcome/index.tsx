import Drop from "../../assets/icons/Drop";
import Button from "../../components/Button";
import styles from "./welcome.module.css";

const rules = [
  {
    id: 1,
    title: "Be yourself",
    description: "Create a profile that reflects who you are (must be 18+)."
  },
  {
    id: 2,
    title: "Respect the AI",
    description: "Treat your AI companions with kindness and respect."
  },
  {
    id: 3,
    title: "Stay safe",
    description: "Never share personal data or sensitive information within conversations."
  },
  {
    id: 4,
    title: "Have fun!",
    description: "Feel free to explore different connections and make meaningful interactions rewarding."
  }
];

function Welcome() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Drop svgAttrs={{ width: "15", height: "28" }} />
        Pink Honey
      </header>
      <h1 className={styles.title}>Welcome to Pink Honey.Live!</h1>
      <p className={styles.description}>
        Please follow these guidelines to ensure a positive experience
      </p>

      <div className={styles.rules}>
        {rules.map((rule) => (
          <div key={rule.id} className={styles.rule}>
            <div className={styles.ruleTitle}>
              <Drop svgAttrs={{ width: "11", height: "20" }} />
              <p>{rule.title}</p>
            </div>
            <div className={styles.ruleDescription}>{rule.description}</div>
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <Button
          onClick={() => console.log("Agree button clicked!")}
          type="button"
          title="I agree"
          label="Click to agree"
          variant="primary"
        />
      </div>
    </section>
  );
}

export default Welcome;
