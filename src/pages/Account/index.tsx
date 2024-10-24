import Drop from "../../assets/icons/Drop";
import Button from "../../components/Button";
import styles from "./account.module.css";
import { ReactComponent as User } from "../../assets/icons/User.svg";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";

function Account() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Drop svgAttrs={{ width: "15", height: "28" }} />
        Pink Honey
      </header>
      <h1 className={styles.title}>Create account</h1>

      <div className={styles.input}>
        <p>First Name</p>
        <input
          type="text"
          placeholder="Enter first name"
          className={styles.inputField}
        />
        <div className={styles.inputIcon}>
          <User />
        </div>
      </div>

      <div className={styles.input}>
        <p>Birthday</p>
        <select className={styles.selectField}>
          <option value="" disabled selected>
            Select year
          </option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className={styles.input}>
        <p>Gender</p>
        <div className={styles.buttons}>
          <Button
            onClick={() => console.log("Gender Male button clicked!")}
            type="button"
            title="Male"
            label="Click to choose Male"
            variant="primary"
            width={"30%"}
            fontSize={14}
          />
          <Button
            onClick={() => console.log("Gender Female button clicked!")}
            type="button"
            title="Female"
            label="Click to choose Female"
            variant="default"
            width={"30%"}
            fontSize={14}
          />
          <Button
            onClick={() => console.log("Gender Non-binary button clicked!")}
            type="button"
            title="Non-binary"
            label="Click to choose Non-binary"
            variant="default"
            width={"30%"}
            fontSize={14}
          />
        </div>
      </div>

      <div className={styles.photos}>
        <p className={styles.profilePhotos}>
          Profile Photos <span>(Optional)</span>
        </p>
        <p>Photos help your profile stand out.</p>
      </div>

      <div className={styles.imageContainer}>
        <div className={`${styles.imageItem} ${styles.item1}`}>
          <Add />
        </div>
        <div className={`${styles.imageItem} ${styles.item2}`}>
          <Add />
        </div>
        <div className={`${styles.imageItem} ${styles.item3}`}>
          <Add />
        </div>
        <div className={`${styles.imageItem} ${styles.item4}`}>
          <Add />
        </div>
        <div className={`${styles.imageItem} ${styles.item5}`}>
          <Add />
        </div>
        <div className={`${styles.imageItem} ${styles.item6}`}>
          <Add />
        </div>
      </div>

      <div className={styles.input} style={{ marginBottom: "32px" }}>
        <p>Looking for</p>
        <Button
          onClick={() => console.log("Add Relationship Intent")}
          type="button"
          title="Add Relationship Intent"
          label="Click to Add Relationship Intent"
          variant="secondary"
          fontSize={14}
          borderRadius={9}
          iconPosition="left"
          icon={<Plus />}
        />
      </div>

      <div className={styles.input} style={{ marginBottom: "46px" }}>
        <p>Interests</p>
        <Button
          onClick={() => console.log("Add Interest")}
          type="button"
          title="Add Interest"
          label="Click to Add Interest"
          variant="secondary"
          fontSize={14}
          borderRadius={9}
          iconPosition="left"
          icon={<Plus />}
        />
      </div>
    </section>
  );
}

export default Account;
