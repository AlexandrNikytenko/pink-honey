import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cats } from "../../constants/cats";
import styles from "./slider.module.css";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { ReactComponent as Like } from "../../assets/icons/Like.svg";
import { ReactComponent as Favorite } from "../../assets/icons/Favorite.svg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <Carousel responsive={responsive} infinite={true} arrows={true} >
      {cats.map((cat) => (
        <div key={cat.id} className={styles.container}>
          <img src={cat.imgUrl} alt={cat.name} className={styles.image} />

          <div className={styles.overlay}>
            <h2 className={styles.name}>{cat.name}</h2>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => console.log("click card")}
              >
                <Close />
              </button>
              <button
                className={styles.button}
                onClick={() => console.log("click card")}
              >
                <Like />
              </button>
              <button
                className={styles.button}
                onClick={() => console.log("click card")}
              >
                <Favorite />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
