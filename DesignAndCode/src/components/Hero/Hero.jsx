import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.NavBar}>
        <div className={styles.left}>
          <img src={getImageUrl("Images/Nav/logo.svg")} alt="my" />
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">Tutorial</a>
            </li>
            <li>
              <a href="">Livestream</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li className={styles.More}>
              <a href="">More</a>
              <div className={styles.more}></div>
            </li>
            <li>
              <a href="">Search</a>
            </li>
            <li className={styles.Sign}>
              <a href="">SignIn</a>
            </li>
          </ul>
        </div>
        <div className={styles.cross}>
          <img src="" alt="cross" />
        </div>
      </nav>

      <div className={styles.content}>
        <div className={styles.sec1}>
          <h1>
            Design <br /> and code
          </h1>
          <h1>
            <span>React</span> Apps
          </h1>
          <p>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </p>
          <button>
            <h5>GET PRO AT 50% OFF</h5>
            <h6>Lorem ipsum dolor sit.</h6>
          </button>
          <p>
            Purchase includes access to 50+ courses, 320+ premium tutorials,
            300+ hours of videos, source files and certificates.
          </p>
        </div>
        <div className={styles.sec2}>
          <img
            className={styles.imgOne}
            src={getImageUrl("Images/Hero/mockup-card2.svg")}
            alt=""
          />
          <img
            className={styles.imgTwo}
            src={getImageUrl("Images/Hero/mockup-card2.svg")}
            alt=""
          />
          <img
            className={styles.img}
            src={getImageUrl("Images/Hero/mockup-content.svg")}
            alt=""
          />
          <img
            className={styles.imgFour}
            src={getImageUrl("Images/Hero/mockup2-bg.svg")}
            alt=""
          />
          <img
            className={styles.imgFive}
            src={getImageUrl("Images/Hero/mockup3-bg.svg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
