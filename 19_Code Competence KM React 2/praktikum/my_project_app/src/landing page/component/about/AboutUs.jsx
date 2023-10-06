import React from "react";

function AboutUs() {
  return (
    <div style={{minHeight: "100vh"}}>
      <header id="about" className="aboutpage mb-3" style={{backgroundColor: "#9ac1f0"}}>
        <h1
          className="display-3 fw-bold mb-5 text-start"
          style={{ color: "black"}}
        >
          About Us
        </h1>
      </header>
        <p className="text-about text-muted mb-5 lead">
          Selamat datang di halaman About Us <span>Polimorph Travel</span>. Kami
          adalah tim yang berkomitmen untuk memberikan pengalaman perjalanan
          yang tak terlupakan kepada Anda
        </p>
      {/* Page Title */}

      {/* Page Content */}
      <div className="container-fluid py-7 mb-5">
        <div className="row g-3 d-flex justify-content-center">
          {/* Column Left */}

          <div className="col-12 col-md-4">
            <picture>
              <img
                className="shadow-sm img-fluid rounded"
                src={require("./img/group-1.jpg")}
                alt=""
              />
            </picture>
          </div>
          <div className="col-12 col-md-4">
            <picture>
              <img
                className="shadow-sm img-fluid rounded mb-4"
                src={require("./img/group-2.jpg")}
                alt=""
              />
            </picture>
            <picture>
              <img
                className="shadow-sm img-fluid rounded"
                src={require("./img/group-3.jpg")}
                alt=""
              />
            </picture>
          </div>
          <div className="col-12 col-md-4 pe-0">
            <picture>
              <img
                className="shadow-sm img-fluid rounded"
                src={require("./img/group-4.png")}
                alt=""
              />
            </picture>
          </div>

          {/* Column Right */}
          {/* <div className="col-12 col-md-6">
            <div className="col-12 col-md-6">
              <picture>
                <img
                  className="shadow-sm img-fluid rounded mb-3"
                  src={require("./img/group-4.jpg")}
                  alt=""
                />
              </picture>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
