import React from "react";
import styles from "./feedback.module.css";
import { ReactComponent as Commas } from "../../assets/icons/Commas.svg";


interface FeedbackProps {
  name?: string;
  feedback?: string;
}

const Feedback: React.FC<FeedbackProps> = ({ name, feedback }) => {
  return (
    <div className={styles.feedbackCard}>
      <h3 className={styles.name}>{name}Turren & Berry</h3>
      <Commas />
      <p className={styles.feedbackText}>
        {feedback}The best solution for anyone who wants to work a flexible
        schedule but still earn a full-time income.
      </p>
      <div  className={styles.downCommas}>
      <Commas />
      </div>
    </div>
  );
};

export default Feedback;
