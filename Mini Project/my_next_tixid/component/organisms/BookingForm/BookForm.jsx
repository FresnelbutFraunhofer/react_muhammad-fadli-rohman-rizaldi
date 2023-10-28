import React, { useEffect, useState } from "react";
import JamTayang from "./JamTayang";
import PaymentItem from "./Payment";
import NominalItem from "./NominalItem";
import axios from "axios";
import { useRouter } from "next/router";

export default function BookForm({ dataFilm }) {
  const [times, setTimes] = useState([]);
  const [nominal, setNominal] = useState([]);
  const [payment, setPayment] = useState([]);

  // State for form
  const [total, setTotal] = useState(0);
  const [timeItems, setTimeItems] = useState({});
  const [nominalItems, setNominalItems] = useState({});
  const [paymentItems, setPaymentItems] = useState({});
  const [bankAccount, setBankAccount] = useState("");

  const router = useRouter();

  const increment = (e) => {
    e.preventDefault();
    setTotal(total + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  useEffect(() => {
    getCases1();
    getCases2();
    getCases3();
  }, []);

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
    // setPayment(resp.data.payments);
  };
  const getCases3 = async () => {
    const resp = await axios.get(
      "https://653cf387d5d6790f5ec8739b.mockapi.io/payments"
    );
    console.log("data: ", resp.data);
    setPayment(resp.data);
  };

  const onTimeShowChange = (data) => {
    setTimeItems(data);
    // localStorage.setItem("time-item", JSON.stringify(data));
  };

  const onNominalChange = (data) => {
    setNominalItems(data);
    // localStorage.setItem("nominal-item", JSON.stringify(data));
  };

  const onPaymentChange = (data) => {
    setPaymentItems(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      timeItems === {} ||
      nominalItems === {} ||
      paymentItems === {} ||
      total === 0 ||
      bankAccount === ""
    ) {
      alert("Silahkan pilih terlebih dahulu");
    } else {
      const data = {
        timeItems,
        nominalItems,
        paymentItems,
        total,
        bankAccount,
        dataFilm,
      };

      localStorage.setItem("payment-item", JSON.stringify(data));

      axios
        .post("https://6538fbf8a543859d1bb24f4e.mockapi.io/datacheckout", data)
        .then((response) => {
          if (response.status == 201) {
            alert("Sukses menambahkan data!");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // useEffect(() => {
      //   axios
      //     .get("http://localhost:3366/datacheckout")
      //     .then((response) => {
      //       setData(response.data);
      //     })
      //     .catch((error) => {
      //       if (error.name === "AbortError") {
      //         console.log("fetch aborted");
      //       }
      //     });
      // }, []);

      // useEffect(() => {
      //   axios
      //     .get("https://6517b49b582f58d62d351486.mockapi.io/products/" + id)
      //     .then((res) => {
      //       setData(res.data);
      //     })
      //     .catch((error) => {
      //       if (error.name === "AbortError") {
      //         console.log("fetch aborted");
      //       }
      //     });
      // }, [id]);
      console.log(data);

      router.push("/checkout");
    }
  };

  return (
    <form
    // action="./checkout.html"
    //   method="POST"
    >
      <div className="pt-md-50 pt-30">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Pilih Jam Tayang
        </p>
        <div className="row justify-content-between">
          {times.map((time) => {
            return (
              <JamTayang
                key={time.id}
                id={time.id}
                value={time.time}
                jam={time.duration}
                onChange={() => onTimeShowChange(time)}
              />
            );
          })}

          <div className="col-lg-4 col-sm-6">{/* Blank*/}</div>
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Pilih Tiket
        </p>
        <div className="row justify-content-between">
          {nominal.map((item) => {
            return (
              <NominalItem
                key={item.id}
                id={item.id}
                value={item.price}
                type={item.type}
                onChange={() => onNominalChange(item)}
              />
            );
          })}
          {/* <NominalItem id="dua" value={50000} type="Business" /> */}
          {/* <NominalItem id="tiga" value={75000} type="Luxury" /> */}
          <div className="col-lg-4 col-sm-6">{/* Blank*/}</div>
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
            onClick={decrement}
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
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <button
            className="btn btn-submit color-palette-1 w-10"
            style={{ padding: "0.5rem 0.5rem", color: "white" }}
            onClick={increment}
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
                <PaymentItem
                  key={item.id}
                  id={item.id}
                  payment={item.payment}
                  type={item.type}
                  onChange={() => onPaymentChange(item)}
                />
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
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
