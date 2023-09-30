import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import TableForm from "./TableForm";

function FormPage() {
  //useState
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [price, setPrice] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(false);

  //useRef
  const productTypeRef1 = useRef(null);
  const productTypeRef2 = useRef(null);
  const productTypeRef3 = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const productImageRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editSelectedProduct = (product) => {
    setEditProduct(product);
  };

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [error7, setError7] = useState("");
  const [error8, setError8] = useState("");
  const [inputBorderColor1, setInputBorderColor1] = useState(""); // State untuk warna border
  const [inputBorderColor2, setInputBorderColor2] = useState(""); // State untuk warna border
  const [inputBorderColor3, setInputBorderColor3] = useState(""); // State untuk warna border
  const [inputBorderColor4, setInputBorderColor4] = useState(""); // State untuk warna border
  const [inputBorderColor5, setInputBorderColor5] = useState(""); // State untuk warna border
  const [inputBorderColor6, setInputBorderColor6] = useState(""); // State untuk warna border
  const [inputBorderColor7, setInputBorderColor7] = useState(""); // State untuk warna border
  const [inputBorderColor8, setInputBorderColor8] = useState(""); // State untuk warna border


  //Handle Change
  const handleProdNameChange = (event) => {
    setProductName(event.target.value);
    setInputBorderColor1("");
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setInputBorderColor2("");
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
    setInputBorderColor4("");
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    setInputBorderColor5("");
  };

  const handleCheckboxChange = () => {
    const newValue = !checkboxValue;
    setCheckboxValue(newValue);
    setInputBorderColor6("");
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Mengambil nilai dari jenis produk menggunakan useRef
    const productType1 = productTypeRef1.current.checked ? productTypeRef1.current.value : null;
    const productType2 = productTypeRef2.current.checked ? productTypeRef2.current.value : null;
    const productType3 = productTypeRef3.current.checked ? productTypeRef3.current.value : null;

    // Mengambil nilai dari file produk menggunakan useRef
    const productImage = productImageRef.current.files[0];

    //Product Name Validation
    if (productName.length > 0 && productName.length <= 10) {
      setError1("");
      setInputBorderColor1("#09c372");
    } else {
      setError1("Product Name must not exceed 10 characters");
      setInputBorderColor1("#ff3860");
    }

    //Product Category Validation
    if (category !== "") {
      setError2("");
      setInputBorderColor2("#09c372");
    } else {
      setError2("The product category field must be filled in");
      setInputBorderColor2("#ff3860");
    }

    //Product Image Validation
    if (productImage) {
      setError7("");
      setInputBorderColor7("#09c372");
    } else {
      setError7("The product image field must be filled in");
      setInputBorderColor7("#ff3860");
    }

    //Product Freshness Validation
    if (!productTypeRef1.current.checked || !productTypeRef1.current.checked || !productTypeRef1.current.checked) {
      setError3("The product freshness field must be filled in");
      setInputBorderColor3("#ff3860");
    } else {
      setError3("");
      setInputBorderColor3("#09c372");
    }

    //Description Validation
    if (descriptionValue !== "") {
      setError4("");
      setInputBorderColor4("#09c372");
    } else {
      setError4("Please enter a valid description for your Product Name");
      setInputBorderColor4("#ff3860");
    }

    //Product Price Validation
    if (price !== 0) {
      setError5("");
      setInputBorderColor5("#09c372");
    } else {
      setError5("The product price field must be filled in");
      setInputBorderColor5("#ff3860");
    }

    //Agree Submission Validation
    if (checkboxValue) {
      setError6("");
      setInputBorderColor6("#09c372");
    } else {
      setError6("You must agree before submitting");
      setInputBorderColor6("#ff3860");
    }

    const regex1 = /^[a-zA-Z]+$/;
    const regex2 = /^[^a-zA-Z]*$/;

    if (productName !== "" && regex1.test(productName) == false) {
      setError8("Product Name must not have number character");
      setInputBorderColor8("#ff3860");
    } else {
      setError8("");
    }

    if (
      productName.length > 0 &&
      productName.length <= 10 &&
      // productType !== "" &&
      productImage !== "" &&
      category !== "" &&
      descriptionValue !== "" &&
      checkboxValue &&
      price !== 0
    ) {

      if (productTypeRef1.current.checked) {
        setSelectedOption(productType1);
      } else if (productTypeRef2.current.checked) {
        setSelectedOption(productType2);
      } else if (productTypeRef3.current.checked) {
        setSelectedOption(productType3);
      } else {
        setSelectedOption(null); // Tidak ada yang dipilih
      }

      setProducts([
        ...products,
        {
          id: uuidv4(),
          pname: productName,
          pcategory: category,
          pimage: productImage,
          pfreshness: selectedOption,
          price: price,
        },
      ]);

      setProductName("");
      setCategory("");
      productImageRef.current.value = "";
      setDescriptionValue("");
      setPrice(0);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
          <div className="content col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <h2 className="mb-3">Detail Product</h2>
            <Form id="form" className="row g-3 needs-validation" method="post">
              <Form.Group controlId="formText" className="mb-3">
                <Form.Label htmlFor="formText" className="form-label">
                  Product Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  className="kolom product col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  name="pname"
                  onChange={handleProdNameChange}
                  style={{ borderColor: inputBorderColor1 }}
                  value={productName}
                />
                <p style={{ color: inputBorderColor1 }}>{error1}</p>
                <p style={{ color: inputBorderColor8 }}>{error8}</p>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="pcategory" className="form-label">
                  Product Category:
                </Form.Label>
                <select
                  id="pcategory"
                  onChange={handleCategoryChange}
                  style={{ borderColor: inputBorderColor2 }}
                  value={category}
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
                <Form.Control
                  type="file"
                  ref={productImageRef}
                  style={{ color: inputBorderColor7 }}
                  accept="image/*"
                />
                <p style={{ color: inputBorderColor7 }}>{error7}</p>
              </Form.Group>

              <Form.Group className="freshness mb-3">
                <label>Product Freshness :</label>
                <br />
                <div className="form-check">
                  <input
                    id="validationFormCheck1"
                    type="radio"
                    className="form-check-input mt-2"
                    value="brand new"
                    name="radio-stacked" // Pastikan semua radio button memiliki name yang sama
                    ref={productTypeRef1}
                  />
                  <label
                    style={{ color: inputBorderColor3 }}
                    className="form-check-label mt-1"
                    htmlFor="validationFormCheck1"
                  >
                    Brand New
                  </label>
                  <br />
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input mt-2"
                    id="validationFormCheck2"
                    name="radio-stacked" // Pastikan semua radio button memiliki name yang sama
                    value="second hank"
                    ref={productTypeRef2}
                  />
                  <label
                    className="form-check-label mt-1"
                    style={{ color: inputBorderColor3 }}
                    htmlFor="validationFormCheck2"
                  >
                    Second Hank
                  </label>
                  <br />
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input mt-2"
                    id="validationFormCheck3"
                    name="radio-stacked" // Pastikan semua radio button memiliki name yang sama
                    value="refurbished"
                    ref={productTypeRef3}
                  />
                  <label
                    style={{ color: inputBorderColor3 }}
                    className="form-check-label mt-1"
                    htmlFor="validationFormCheck3"
                  >
                    Refurbished
                  </label>
                </div>
                <p style={{ color: inputBorderColor3 }}>{error3}</p>
              </Form.Group>

              <Form.Group className="description input-control mb-3">
                <Form.Label htmlFor="descrip">
                  Additional Description:
                </Form.Label>
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
                <Form.Label htmlFor="price">Product price :</Form.Label>
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
                  value={price}
                  required
                />
                <p style={{ color: inputBorderColor5 }}>{error5}</p>
              </Form.Group>

              <Form.Group className="col-12">
                <div className="form-check">
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
                  <Form.Label
                    className="form-check-label"
                    htmlFor="invalidCheck"
                  >
                    Agree to terms and conditions
                  </Form.Label>
                  <p style={{ color: inputBorderColor6 }}>{error6}</p>
                </div>
              </Form.Group>
              <div className="text-center row submit mb-5">
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
      <TableForm
        products={products}
        onDeleteProduct={deleteProduct}
        onEditProduct={editSelectedProduct}
      />
    </div>
  );
}

export default FormPage;
