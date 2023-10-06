import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="design-1">
          <h1 className="text-end me-5">Contact Us</h1>
        </div>
        <div className="contact-us mt-5">
          <div className="baris">
            <div className="column">
              <div className="card">
                <img
                  src={require("../contact/gambar-1.jpg")}
                  alt="Muhammad"
                  style={{ width: "100%" }}
                />
                <div className="container px-2">
                  <h2>Muhammad Fadli</h2>
                  <p className="title">CEO &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="button-1">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  src={require("../contact/gambar-2.jpg")}
                  alt="Kammal"
                  style={{ width: "100%" }}
                />
                <div className="container px-2">
                  <h2>Shanon Kammal</h2>
                  <p className="title">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="button-1">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="form-footer container-fluid">
            <div className="form-section">
              <h2>Join Our Newsletter</h2>
              <p className="desc-form">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                fugiat minus ex blanditiis?
              </p>
              <div className="subscribe">
                <input type="text" id="subs" name="subscribe" />
                <input
                  type="button"
                  defaultValue="Subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
          <div className="foot container pt-3 pb-3">
            <div className="contain-foot d-flex row">
              <div className="info-1 col-sm-6 col-xl-3 col-md-3 mx-auto mb-3">
                <h2>FADLI</h2>
                <div className="address-1">
                  <p>A108 Adam Street</p>
                  <p>Surabaya, NY 535022</p>
                  <p>United States</p>
                </div>
                <div className="address-2 d-flex gap-2">
                  <a href="https://github.com/FresnelbutFraunhofer">
                    <i className="bi bi-github" style={{ fontSize: "2rem" }} />
                  </a>
                  <a href="https://www.instagram.com/aldi.rohman1009/">
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "2rem" }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-fadli-rohman-r-b3652121a">
                    <i
                      className="bi bi-linkedin"
                      style={{ fontSize: "2rem" }}
                    />
                  </a>
                </div>
              </div>
              <div className="info-2 col-sm-6 col-xl-3 col-md-3 mb-3">
                <h3>Useful Links</h3>
                <ul className="useful">
                  <li>Home</li>
                  <li>Our Package</li>
                  <li>Contact Us</li>
                  <li>About</li>
                </ul>
              </div>
              <div className="info-3 col-sm-6 col-xl-3 col-md-3 mb-3">
                <h3>Our Services</h3>
                <ul className="services">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
              <div className="info-4 col-sm-6 col-xl-3 col-md-3 mb-3">
                <h3>Our Social Networks</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Voluptatibus, quis.
                </p>
                <div className="round-group">
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
            <div className="copyright row pt-3 pb-3 align-items-center justify-content-center">
              <h4 className="col-6">
                © Copyright <i>Fadli</i>. Allright Reserved
              </h4>
              <div className="col-6 text-end">
                <h5>
                  Designed by
                  <a className="bootstrap ms-2" href="#">
                    <i>Polimorph</i>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Contact;
