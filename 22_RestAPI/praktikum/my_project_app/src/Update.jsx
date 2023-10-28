import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { v4 as uuid4 } from "uuid";

function Update() {
  const { id } = useParams();
  //   const [productName, setProductName] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [price, setPrice] = useState(0);
  const [data, setData] = useState({
    pname: "",
    pcategory: "",
    price: 0,
  });

  //   const blog = {
  //     pname: productName,
  //     pcategory: category,
  //     price: price,
  //   };

  useEffect(() => {
    axios
      .get("https://6517b49b582f58d62d351486.mockapi.io/products/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        }
      });
  }, [id]);

  const nav = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("https://6538fbf8a543859d1bb24f4e.mockapi.io/products/" + id, data)
      .then((res) => {
        console.log(res.data);
        nav("/account");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="contain">
        <div className="container update">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
            <div className="content col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <h2 className="mb-3">Detail Product</h2>
              <Form
                id="form"
                className="row g-3 needs-validation"
                onSubmit={handleUpdate}
              >
                <Form.Group controlId="formText" className="mb-3">
                  <Form.Label htmlFor="formText" className="form-label">
                    Product Name:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="kolom product col-xl-6 col-lg-6 col-md-6 col-sm-6"
                    name="pname"
                    value={data.pname}
                    onChange={(event) =>
                      setData({ ...data, pname: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="pcategory" className="form-label">
                    Product Category:
                  </Form.Label>
                  <select
                    id="pcategory"
                    onChange={(event) =>
                      setData({ ...data, pcategory: event.target.value })
                    }
                    value={data.pcategory}
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
                </Form.Group>

                {/* <Form.Group className="freshness mb-3">
                <label>Product Freshness :</label>
                <br />
                <div className="form-check">
                  <input
                    id="validationFormCheck1"
                    type="radio"
                    className="form-check-input mt-2"
                    value="brand new"
                    name="radio-stacked" // Pastikan semua radio button memiliki name yang sama
                  />
                  <label
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
                  />
                  <label
                    className="form-check-label mt-1"
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
                  />
                  <label
                    className="form-check-label mt-1"
                    htmlFor="validationFormCheck3"
                  >
                    Refurbished
                  </label>
                </div>
              </Form.Group> */}

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
                    value={data.price}
                    onChange={(event) =>
                      setData({ ...data, price: event.target.value })
                    }
                    required
                  />
                </Form.Group>

                <div className="text-center row submit mb-5">
                  <div className="col-2 col-sm-2"></div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary mt-5 col-8 col-sm-8"
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#alert-success"
                    >
                      Update Product
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
    </>
  );
}

export default Update;
