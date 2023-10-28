import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/component/organisms/Navbar/Navbar";
import Link from "next/link";

export default function edit() {
  const { query, isReady } = useRouter();
  const router = useRouter();

  const [times, setTimes] = useState([]);
  const [nominal, setNominal] = useState([]);
  const [payment, setPayment] = useState([]);
  const [editData, setEditData] = useState({
    timeItems: {},
    nominalItems: {},
    paymentItems: {},
    total: 0,
    bankAccount: "",
    dataFilm: {},
  });

  // State for form
  // const [total, setTotal] = useState(0);
  // const [timeItems, setTimeItems] = useState({});
  // const [nominalItems, setNominalItems] = useState({});
  // const [paymentItems, setPaymentItems] = useState({});
  // const [bankAccount, setBankAccount] = useState("");

  // for counter
  const handleTotalChange = (event, counterKey) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setCounter((prevCounter) => ({
        ...prevCounter,
        [counterKey]: newValue >= 0 ? newValue : prevCounter[counterKey],
      }));
      setError(""); // Reset pesan kesalahan
    }
  };

  const increment = (counterKey) => {
    // e.preventDefault();
    setEditData((prevEditData) => ({
      ...prevEditData,
      [counterKey]: prevEditData[counterKey] + 1,
    }));
  };

  const decrement = (counterKey) => {
    // e.preventDefault();
    if (editData[counterKey] > 0) {
      setEditData((prevEditData) => ({
        ...prevEditData,
        [counterKey]: prevEditData[counterKey] - 1,
      }));
    }
  };

  //for fetching data
  useEffect(() => {
    if (isReady) {
      console.log("router tersedia", query.id);
      getCases1();
      getCases2();
      getCases3();
      getCases4(query.id);
    } else {
      console.log("router tidak tersedia");
    }
  }, [isReady]);

  //fetching function
  const getCases1 = async () => {
    const resp = await axios.get(
      "https://6517b49b582f58d62d351486.mockapi.io/timeshow"
    );
    console.log("data: ", resp.data);
    setTimes(resp.data);
  };

  const getCases2 = async () => {
    const resp = await axios.get(
      "https://653cf387d5d6790f5ec8739b.mockapi.io/nominals"
    );
    console.log("data: ", resp.data);
    setNominal(resp.data);
  };

  const getCases3 = async () => {
    const resp = await axios.get(
      "https://653cf387d5d6790f5ec8739b.mockapi.io/payments"
    );
    console.log("data: ", resp.data);
    setPayment(resp.data);
  };

  const getCases4 = async (param) => {
    const resp = await axios.get(
      "https://6538fbf8a543859d1bb24f4e.mockapi.io/datacheckout/" + param
    );
    console.log("data: ", resp.data);
    // return resp.json();
    setEditData(resp.data);
  };

  //onChange Radio Button
  const onTimeShowChange = (data) => {
    setEditData({ ...editData, timeItems: data });
    console.log(data);
  };

  const onNominalChange = (data) => {
    setEditData({ ...editData, nominalItems: data });
    console.log(data);
  };

  const onPaymentChange = (data) => {
    setEditData({ ...editData, paymentItems: data });
    console.log(data);
  };

  //handle for submit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      editData.timeItems === "" ||
      editData.nominalItems === "" ||
      editData.paymentItems === "" ||
      editData.total === 0 ||
      editData.bankAccount === ""
    ) {
      alert("Silahkan pilih terlebih dahulu");
    } else {
      // const data = {
      //   editData,
      //   total,
      // };
      console.log(editData);
      localStorage.setItem("payment-item", JSON.stringify(editData));

      axios
        .put(
          "https://6538fbf8a543859d1bb24f4e.mockapi.io/datacheckout/" +
            query.id,
          editData
        )
        .then((res) => {
          console.log(res.data);
          // nav("/account");
        })
        .catch((error) => console.log(error));

      router.push("/checkout");
    }
  };

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        {/* <div>{id}</div> */}
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Edit Payment
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Ciptakan pengalaman tak terlupakanmu
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center"></div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* Desktop: Game title */}
              {/* <div className="pb-50 d-md-block d-none">
              <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                Mobile Legends:
                <br />
                The New Battle 2021
              </h2>
              <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
            </div>
            <hr /> */}
              <form onSubmit={handleSubmit} method="POST">
                <div className="pt-md-50 pt-30">
                  <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                    Pilih Jam Tayang
                  </p>
                  <div className="">
                    {times.map((time) => {
                      return (
                        <label
                          className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                          htmlFor={time.id}
                          key={time.id}
                          onChange={() => onTimeShowChange(time)}
                        >
                          <input
                            className="d-none"
                            type="radio"
                            id={time.id}
                            name="jam-tayang"
                            value={time.time}
                          />
                          <div className="detail-card">
                            <div className="d-flex justify-content-between">
                              <p className="text-3xl color-palette-1 m-0 fw-medium">
                                {time.duration}
                              </p>
                              <svg
                                id="icon-check"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                <path
                                  d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                                  stroke="#00BAFF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                  <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                    Nominal Top Up
                  </p>
                  <div className="row justify-content-between">
                    {nominal.map((item) => {
                      return (
                        <label
                          className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                          htmlFor={item.id}
                          onChange={() => onNominalChange(item)}
                        >
                          <input
                            className="d-none"
                            type="radio"
                            id={item.id}
                            name="topup"
                            value={item.price}
                          />
                          <div className="detail-card">
                            <div className="d-flex justify-content-between">
                              <p className="text-3xl color-palette-1 m-0">
                                <span className="fw-medium">Rp.</span>{" "}
                                {item.price}
                              </p>
                              <svg
                                id="icon-check"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                <path
                                  d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                                  stroke="#00BAFF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-lg color-palette-1 m-0">
                              {item.type}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                    <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
                  </div>
                </div>

                <div className="detail pb-md-50 pb-20">
                  <label
                    htmlFor="ticket"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Jumlah Tiket
                  </label>
                  <div className="d-flex">
                    <button
                      className="btn btn-submit color-palette-1"
                      style={{ padding: "0.5rem 0.5rem", color: "white" }}
                      onClick={() => decrement("total")}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="text-lg"
                      min="0"
                      max="100"
                      id="ticket"
                      name="ticket"
                      aria-describedby="ticket"
                      value={editData.total}
                      onChange={(e) => handleTotalChange(e, "total")}
                    />
                    <button
                      className="btn btn-submit color-palette-1 w-10"
                      style={{ padding: "0.5rem 0.5rem", color: "white" }}
                      // onClick={}
                      onClick={() => increment("total")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="pb-md-50 pb-20">
                  <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                    Payment Method
                  </p>
                  <fieldset id="paymentMethod">
                    <div className="row justify-content-between">
                      {payment.map((item) => {
                        return (
                          <label
                            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                            htmlFor={item.id}
                            onChange={() => onPaymentChange(item)}
                          >
                            <input
                              className="d-none"
                              type="radio"
                              id={item.id}
                              name="paymentMethod"
                              value="transfer"
                            />
                            <div className="detail-card">
                              <div className="d-flex justify-content-between">
                                <p className="text-3xl color-palette-1 fw-medium m-0">
                                  {item.payment}
                                </p>
                                <svg
                                  id="icon-check"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="10"
                                    fill="#CDF1FF"
                                  />
                                  <path
                                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                                    stroke="#00BAFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <p className="text-lg color-palette-1 m-0">
                                {item.type}
                              </p>
                            </div>
                          </label>
                        );
                      })}
                      <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
                    </div>
                  </fieldset>
                </div>
                <div className="pb-50">
                  <label
                    htmlFor="bankAccount"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Bank Account Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="bankAccount"
                    name="bankAccount"
                    aria-describedby="bankAccount"
                    placeholder="Enter your Bank Account Name"
                    value={editData.bankAccount}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        bankAccount: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="d-sm-block w-100 row">
                  <button
                    type="submit"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg col-3 me-3"
                  >
                    Continue
                  </button>
                  <Link href={"/history"}>
                    <button
                      type="submit"
                      className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg col-3"
                    >
                      History
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
