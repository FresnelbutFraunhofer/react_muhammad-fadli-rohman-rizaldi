import React from "react";
import Form from "react-bootstrap/Form";

function FormPage() {
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
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="pcategory" className="form-label">
                  Product Category:
                </Form.Label>
                <select
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

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Image of Product:</Form.Label>
                <Form.Control type="file" />
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
                  />
                  <Form.Label
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
                  />
                  <Form.Label
                    class="form-check-label mt-1"
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
                  />
                  <Form.Label
                    class="form-check-label mt-1"
                    for="validationFormCheck3"
                  >
                    Refurbished
                  </Form.Label>
                </div>
              </Form.Group>

              <Form.Group className="description input-control mb-3">
                <Form.Label for="desc">Additional Description:</Form.Label>
                <br />
                <textarea
                  id="descrip"
                  className="kolom form-control col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  name="desc"
                  rows="6"
                  required
                ></textarea>
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
                  required
                />
              </Form.Group>

              <Form.Group class="col-12">
                <div class="form-check">
                  <input
                    id="invalidCheck"
                    name="validCheck"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    required
                  />
                  <Form.Label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </Form.Label>
                </div>
              </Form.Group>
              <div className="text-center row submit">
                <div className="col-2 col-sm-2"></div>
                <div className="col-12">
                  <button
                    className="btn btn-primary mt-5 col-8 col-sm-8"
                    type="submit"
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
