import React, { useEffect, useState } from "react";
import BookForm from "@/component/organisms/BookingForm/BookForm";
import Navbar from "@/component/organisms/Navbar/Navbar";
import Footer from "@/component/organisms/Footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function index() {
  const { query, isReady } = useRouter();
  const [dataFilm, setDataFilm] = useState([]);

  const getCases = useCallback(async (id) => {
    const resp = await axios.get(
      "https://6517b49b582f58d62d351486.mockapi.io/filmlist/" + id
    );
    console.log("data: ", resp.data);
    setDataFilm(resp.data);
  }, []);

  useEffect(() => {
    if (isReady) {
      console.log("router sudah tersedia", query.id);
      getCases(query.id);
    } else {
      console.log("router tidak tersedia");
    }
    // getCases(id);
  }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Ticket Book
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Ciptakan pengalaman tak terlupakanmu
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 col-4">
                  <img
                    src={dataFilm.image}
                    width="280"
                    height="380"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-12 col-8 d-md-none d-block">
                  <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
                    {dataFilm.name}
                  </h2>
                  <p className="text-sm color-palette-2 text-start mb-0">
                    Genre: {dataFilm.genre}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <div className="pb-3 d-md-block d-none">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                  {dataFilm.name}
                </h2>
                <p className="text-lg color-palette-2 mb-0">
                  Genre: {dataFilm.genre}
                </p>
              </div>
              <hr />
              <p className="text-lg color-palette-1 mt-3">
                {dataFilm.description}
              </p>
              <BookForm dataFilm={dataFilm} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
