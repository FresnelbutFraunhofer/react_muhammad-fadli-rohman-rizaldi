import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Welcome() {
  const images = ["./img/bali.jpg", "./img/banyuwangi.jpg", "./img/malang.jpg"]; // Daftar gambar slideshow
  let index = 0;

  function changeBackground() {
    index = (index + 1) % images.length;
    const imageUrl = images[index];
    document.getElementById(
      "hero"
    ).style.backgroundImage = `url('${imageUrl}')`;
  }

  // Mengganti gambar latar belakang setiap 5 detik
  setInterval(changeBackground, 5000);

  // const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setInputBorderColor1("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setInputBorderColor2("");
  };
  const handleSelect = (e) => {
    setDestination(e.target.value);
    setInputBorderColor3("");
  };

  const handleClick = (e) => {
    e.preventDefault();

    const regexEmail = /^[\S+@\S+$]/;

    if (name.length > 0 && name.length <= 10) {
      setError1("");
      setInputBorderColor1("#09c372");
    } else {
      setError1("Product Name must not exceed 10 characters");
      setInputBorderColor1("#ff3860");
    }

    if (email !== "" && regexEmail.test(email) == true) {
      setError2("");
      setInputBorderColor2("#09c372");
    } else {
      setError2("Please enter a valid email");
      setInputBorderColor2("#ff3860");
    }

    if (destination !== "") {
      setError3("");
      setInputBorderColor3("#09c372");
    } else {
      setError3("The destination field must be filled in");
      setInputBorderColor3("#ff3860");
    }

    // const submit = (form) => {
    //   setForm([
    //     ...form,
    //     {
    //       name: name,
    //       email: email,
    //       destination: destination,
    //     },
    //   ]);
    // };

    // if (
    //   name.length > 0 &&
    //   name.length <= 10 &&
    //   email !== "" &&
    //   regexEmail.test(email) == true &&
    //   destination !== ""
    // ) {
    //   submit();

    //   setName("");
    //   setEmail("");
    //   setDestination("");
    // }

    // console.log(form);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section
        id="hero"
        className="welcome-page w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center"
      >
        <div className="pt-5">
          <h1 className="">
            Hi, Welcome to <span id="logo-name">Polimorph Travel</span>
          </h1>
          <p>Your happiness is our happiness</p>
        </div>
        <div id="form-user" className="form mt-5">
          <h2 className="mt-4">Contact Us</h2>
          <p>Kami siap menghubungi anda 1x24 jam setelah data kami terima</p>
          <form id="form" action="landingPage.html" onSubmit={handleClick}>
            <div className="row">
              <div className="input-control mb-1 col-lg-10 col-md-8 col-8 mx-auto">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama-user"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={handleName}
                  style={{ borderColor: inputBorderColor1 }}
                  required=""
                />
                <p
                  className="error-form"
                  style={{ borderColor: inputBorderColor1 }}
                >
                  {error1}
                </p>
              </div>
              <div className="input-control mb-1 col-lg-10 col-md-8 col-8 mx-auto">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-user"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmail}
                  style={{ borderColor: inputBorderColor2 }}
                  required=""
                />
                <p
                  className="error-form"
                  style={{ borderColor: inputBorderColor2 }}
                >
                  {error2}
                </p>
              </div>
              <div className="input-control mb-1 col-lg-10 col-md-8 col-sm-8 col-8 mx-auto">
                <label htmlFor="floatingSelect">Your Destination</label>
                <select
                  className="form-select"
                  id="destination-user"
                  aria-label="Floating label select example"
                  onChange={handleSelect}
                  style={{ borderColor: inputBorderColor3 }}
                  required=""
                >
                  <option value="">Open this select menu</option>
                  <option value="surabaya">Surabaya</option>
                  <option value="solo">Solo</option>
                  <option value="yogyakarta">Yogyakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="bali">Bali</option>
                  <option value="malang">Malang</option>
                  <option value="banyuwangi">Banyuwangi</option>
                </select>
                <p
                  className="error-form"
                  style={{ borderColor: inputBorderColor3 }}
                >
                  {error3}
                </p>
              </div>
              <button
                type="submit"
                id="button-submit"
                onClick={handleShow}
                className="btn btn-primary col-lg-8 col-md-6 col-6 mx-auto"
              >
                Submit
              </button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Data anda sudah tersubmit!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Nama: {name}</p>
                  <p>Email: {email}</p>
                  <p>Destinasi: {destination}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
