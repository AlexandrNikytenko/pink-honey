import styles from './footer.module.css';
import Drop from "../../assets/icons/Drop";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <Drop svgAttrs={{ width: "15", height: "28" }} pathAttrs={{fill: '#EE94DF'}}/>
          <span className={styles.companyName}>Pink Honey</span>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Consumer Health Data Privacy</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Intellectual Property</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Promo Code</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Career</h4>
            <ul>
              <li><a href="#">Career Portal</a></li>
              <li><a href="#">Tech Blog</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Socials</h4>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2024 Pink Honey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
