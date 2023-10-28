import React, { useEffect, useState } from "react";
// import Image from "next/image";
import FilmItem from "@/component/molecules/FilmItem";
import axios from "axios";

export default function ShowingNow() {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    getCases();
  }, []);

  const getCases = async () => {
    const resp = await axios.get(
      "https://6517b49b582f58d62d351486.mockapi.io/filmlist"
    );
    console.log("data: ", resp.data);
    setFilmList(resp.data);
  };

  return (
    <section id="showfilm" className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Showing Your Film
          <br /> For Now
        </h2>
        <div
          className="d-flex flex-row overflow-y-hidden overflow-x-auto overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {filmList.map((item) => {
            return (
              <div className="me-5">
                <FilmItem
                  key={item.id}
                  title={item.name}
                  film={item.image}
                  genre={item.genre}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
