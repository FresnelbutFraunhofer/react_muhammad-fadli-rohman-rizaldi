import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import styles from './FormPage.module.css'

function FormPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [inputBorderColor1, setInputBorderColor1] = useState(""); // State untuk warna border
  const [inputBorderColor2, setInputBorderColor2] = useState(""); // State untuk warna border
  const [inputBorderColor3, setInputBorderColor3] = useState(""); // State untuk warna border
  const [inputBorderColor4, setInputBorderColor4] = useState(""); // State untuk warna border
  const [inputBorderColor5, setInputBorderColor5] = useState(""); // State untuk warna border
  const [inputBorderColor6, setInputBorderColor6] = useState(""); // State untuk warna border

  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setInputBorderColor1(""); // Reset warna border saat nilai input berubah
  };

  const handleSelectOption = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    setInputBorderColor2(""); // Reset warna border saat nilai input berubah
  };

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setRadioValue(newValue);
    setInputBorderColor3("");
  };
  
  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    setDescriptionValue(newValue);
    setInputBorderColor4("");
  };
  
  const handlePriceChange = (event) => {
    const newValue = event.target.value;
    setPriceValue(newValue);
    setInputBorderColor5("");
  };
  
  const handleCheckboxChange = () => {
    const newValue = !checkboxValue;
    setCheckboxValue(newValue);
    setInputBorderColor6("");
  };

  const handleButtonClick = () => {
    if (inputValue.length > 0 && inputValue.length <= 10) {
      setError1("");
      setInputBorderColor1("#09c372");
      // Lakukan apa pun yang perlu Anda lakukan dengan nilai yang valid
    } else {
      setError1("Product Name must not exceed 10 characters");
      setInputBorderColor1("#ff3860"); // Set warna border merah
    }

    // Validasi saat tombol diklik
    if (selectedOption !== "") {
      setError2("");
      setInputBorderColor2("#09c372"); // Set warna border merah jika validasi gagal
    } else {
      setError2("The product category field must be filled in");
      setInputBorderColor2("#ff3860"); // Set warna border hijau jika validasi berhasil
    }

    // Validasi saat tombol diklik
    if (radioValue !== "") {
      setError3(""); // Set warna border merah jika validasi gagal
      setInputBorderColor3("#09c372");
    } else {
      setError3("The product freshness field must be filled in");
      setInputBorderColor3("#ff3860"); // Set warna border hijau jika validasi berhasil
    }
    
    if (descriptionValue !== "") {
      setError4(""); // Set warna border merah jika validasi gagal
      setInputBorderColor4("#09c372");
    } else {
      setError4("Please enter a valid description for your Product Name");
      setInputBorderColor4("#ff3860"); // Set warna border hijau jika validasi berhasil
    }
    
    if (priceValue !== "") {
      setError5(""); // Set warna border merah jika validasi gagal
      setInputBorderColor5("#09c372");
    } else {
      setError5("The product price field must be filled in");
      setInputBorderColor5("#ff3860"); // Set warna border hijau jika validasi berhasil
    }
    
    if (checkboxValue) {
      setError6(""); // Set warna border merah jika validasi gagal
      setInputBorderColor6("#09c372");
    } else {
      setError6("You must agree before submitting");
      setInputBorderColor6("#ff3860"); // Set warna border hijau jika validasi berhasil
    }


  };

  return (
    <div>
      <div className="container">
        <div class="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
          <div className="content col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <h2 className="mb-3">Detail Product</h2>
            <Form
              id="form"
              action="landingPage.html"
              className="row g-3 needs-validation"
            >
              <Form.Group controlId="formText" className="mb-3">
                <Form.Label htmlFor="pname" className="form-label">
                  Product Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  className="kolom product col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  name="productname"
                  onChange={handleTextChange}
                  style={{ borderColor: inputBorderColor1 }}
                  value={inputValue}
                />
                <p style={{ color: inputBorderColor1 }}>{error1}</p>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="pcategory" className="form-label">
                  Product Category:
                </Form.Label>
                <select
                  onChange={handleSelectOption}
                  style={{ borderColor: inputBorderColor2 }}
                  value={selectedOption}
                  name="pcategory"
                  className="kolom choose form-select col-xl-4 col-lg-4 col-md-4 col-sm-4"
                  required
                >
                  <option selected disabled value=""></option>
                  <option value="Convenience">Convenience goods</option>
                  <option value="Shopping">Shopping goods</option>
                  <option value="Specialty">Specialty goods</option>
                  <option value="Unsought">Unsought goods</option>
                </select>
                <p style={{ color: inputBorderColor2 }}>{error2}</p>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Image of Product:</Form.Label>
                <Form.Control type="file" />
                <div class="error"></div>
              </Form.Group>

              <Form.Group controlId="formRadio" className="freshness mb-3">
                <Form.Label for="freshness">Product Freshness :</Form.Label>
                <br />
                <div class="form-check">
                  <input
                    id="validationFormCheck1"
                    type="radio"
                    class="form-check-input mt-2"
                    value="brand new"
                    name="radio-stacked"
                    checked={radioValue === "brand new"}
                    onChange={handleRadioChange}
                  />
                  <Form.Label
                    style={{ color: inputBorderColor3 }}
                    class="form-check-label mt-1"
                    for="validationFormCheck1"
                  >
                    Brand New
                  </Form.Label>
                  <br />
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input mt-2"
                    id="validationFormCheck2"
                    name="radio-stacked"
                    value="second hank"
                    checked={radioValue === "second hank"}
                    onChange={handleRadioChange}
                  />
                  <Form.Label
                    class="form-check-label mt-1"
                    style={{ color: inputBorderColor3 }}
                    for="validationFormCheck2"
                  >
                    Second Hank
                  </Form.Label>
                  <br />
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input mt-2"
                    id="validationFormCheck3"
                    name="radio-stacked"
                    value="refurbished"
                    checked={radioValue === "refurbished"}
                    onChange={handleRadioChange}
                  />
                  <Form.Label
                    style={{ color: inputBorderColor3 }}
                    class="form-check-label mt-1"
                    for="validationFormCheck3"
                  >
                    Refurbished
                  </Form.Label>
                </div>
                <p style={{ color: inputBorderColor3 }}>{error3}</p>
              </Form.Group>

              <Form.Group className="description input-control mb-3">
                <Form.Label for="desc">Additional Description:</Form.Label>
                <br />
                <textarea
                  id="descrip"
                  className="kolom form-control col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  onChange={handleDescriptionChange}
                  style={{ borderColor: inputBorderColor4 }}
                  value={descriptionValue}
                  name="desc"
                  rows="6"
                  required
                  ></textarea>
                <p style={{ color: inputBorderColor4 }}>{error4}</p>
              </Form.Group>

              <Form.Group className="price input-control mb-2">
                <Form.Label for="price">Product price :</Form.Label>
                <br />
                <Form.Control
                  id="price"
                  type="number"
                  name="price"
                  className="kolom form-control col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  min="1"
                  max="1000000"
                  placeholder="Rp. 100000"
                  onChange={handlePriceChange}
                  style={{ borderColor: inputBorderColor5 }}
                  value={priceValue}
                  required
                  />
                <p style={{ color: inputBorderColor5 }}>{error5}</p>
              </Form.Group>

              <Form.Group class="col-12">
                <div class="form-check">
                  <input
                    id="invalidCheck"
                    onChange={handleCheckboxChange}
                    checked={checkboxValue}
                    name="validCheck"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    required
                  />
                  <Form.Label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </Form.Label>
                  <p style={{ color: inputBorderColor6 }}>{error6}</p>
                </div>
              </Form.Group>
              <div className="text-center row submit">
                <div className="col-2 col-sm-2"></div>
                <div className="col-12">
                  <button
                    className="btn btn-primary mt-5 col-8 col-sm-8"
                    type="submit"
                    onClick={handleButtonClick}
                    data-bs-toggle="modal"
                    data-bs-target="#alert-success"
                  >
                    Create Product
                  </button>
                </div>
                <div className="col-2 col-sm-2"></div>
              </div>
            </Form>
          </div>
          <div className="col col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
