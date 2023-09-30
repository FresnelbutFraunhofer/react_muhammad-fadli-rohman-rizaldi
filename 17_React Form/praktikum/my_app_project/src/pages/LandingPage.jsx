import React from "react";
import styles from "./LandingPage.module.css";
import NavigationBar from "../component/NavigationBar";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavigationBar />
      <section className={styles.welcome}>
        <div className="container">
          <div className="row align-items-center">
            <div className="text-welcome col-sm-6">
              <h1 className={styles.title}>Better Solutions For Your Bussiness</h1>
              <p className={styles.textwelcome}>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className={styles.welcomelink}>
                <a className={styles.getlink} href="#">
                  <i>Get Started</i>
                </a>
                <a className={styles.videolink} href="#">
                  <i>Watch Video</i>
                </a>
              </div>
            </div>
            <img
              src="https://freedesignfile.com/upload/2023/05/Business-man-cartoon-vector.jpg"
              id={styles.image}
              className="col-sm-6"
              alt="bussiness-man-cartoon"
            />
          </div>
        </div>
        <button onClick={goHome}>Go Home</button>
      </section>
      <footer>
        <div className={styles.form}>
          <div className={styles.formsection}>
            <h2>Join Our Newsletter</h2>
            <p className={styles.descform}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              fugiat minus ex blanditiis?
            </p>
            <div className="subscribe">
              <input type="text" id={styles.subs} name="subscribe" />
              <input
                type="button"
                defaultValue="Subscribe"
                className={styles.button}
              />
            </div>
          </div>
        </div>
        <div id={styles.foot} className="foot container pt-3 pb-3">
          <div className="row justify-content-center">
            <div
              id={styles.info1}
              className="col-sm-6 col-xl-3 col-md-3 align-self-center mx-auto mb-3"
            >
              <h2>FADLI</h2>
              <div className={styles.address1}>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
              </div>
              <div className={styles.address2}>
                <p>
                  <span>Phone:</span> +1 558955488 55
                </p>
                <p>
                  <span>Email:</span> rizaldirohman1009@gmail.com
                </p>
              </div>
            </div>
            <div
              id={styles.info2}
              className="col-sm-6 col-xl-3 col-md-3 align-self-center mb-3"
            >
              <h3>Useful Links</h3>
              <ul className={styles.useful}>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Term of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div
              id={styles.info3}
              className="info-3 col-sm-6 col-xl-3 col-md-3 align-self-center mb-3"
            >
              <h3>Our Services</h3>
              <ul className={styles.service}>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div id={styles.info4} className="col-sm-6 col-xl-3 col-md-3 mb-3">
              <h3>Our Social Networks</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Voluptatibus, quis.
              </p>
              <div className={styles.roundgroup}>
                <div className="round" />
                <div className="round" />
                <div className="round" />
                <div className="round" />
                <div className="round" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            id={styles.copyright}
            className="row pt-3 pb-3 align-items-center justify-content-center"
          >
            <h4 className="col-6">
              © Copyright <i>Fadli</i>. Allright Reserved
            </h4>
            <div className="col-6 text-end">
              <h5>
                Designed by{" "}
                <span>
                  <a
                    className={styles.bootstrap}
                    href="https://getbootstrap.com/"
                  >
                    <i>BootstrapMode</i>
                  </a>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
