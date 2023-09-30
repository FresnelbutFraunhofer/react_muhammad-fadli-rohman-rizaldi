import React, { useState, useRef } from "react";

function FormBook() {
  const dataEmpty = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
  };

  const [data, setData] = useState(dataEmpty);
  const regex = /^[A-Za-z]*$/;
  const photoCover = useRef(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });

    if (name === "pengarang") {
      if (regex.test(value)) {
        setError("");
      } else {
        setError("Nama pengarang berupa huruf");
      }
    }

    console.log("data", data);
  };

  const handleSubmit = (e) => {
    if (error !== "") {
      alert("Terdapat data yang salah");
    } else {
      alert(`Data buku "${data.judul}" berhasil diterima`);
    }

    e.preventDefault();
  };

  const resetData = () => {
    setData(dataEmpty);
    setError("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Formulir Buku Baru</h1>
      <form action="" onSubmit={handleSubmit} className="">
        <label htmlFor="" className="">
          Judul:
          <input
            type="text"
            className=""
            name="judul"
            value={data.judul}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label htmlFor="">
          Pengarang:
          <input
            type="text"
            className=""
            name="pengarang"
            value={data.pengarang}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label htmlFor="">
          Cetakan:
          <input
            type="text"
            className=""
            name="cetakan"
            onChange={handleChange}
            value={data.cetakan}
          />
        </label>
        <br></br>
        <label htmlFor="">
          Tahun Terbit:
          <input
            type="number"
            className=""
            name="tahunTerbit"
            onChange={handleChange}
            value={data.tahunTerbit}
          />
        </label>
        <br></br>
        <label htmlFor="">
          Kota Terbit:
          <input
            type="number"
            className=""
            name="kotaTerbit"
            onChange={handleChange}
            value={data.kotaTerbit}
          />
        </label>
        <br></br>
        <label htmlFor="">
          Harga:
          <input
            type="number"
            className=""
            name="harga"
            onChange={handleChange}
            value={data.harga}
          />
        </label>
        <br></br>
        <label htmlFor="">
          Foto Sampul:
          <input type="file" className="" name="foto sampul" ref={photoCover} />
        </label>
        <br></br>
        <p style={{ color: "red" }}>{error}</p>
        <input type="submit" className="success" value="submit" />
        <button type="button" className="primary" onClick={resetData}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default FormBook;
