import React, { useState } from "react";
import Navbar from "@/component/organisms/Navbar/Navbar";
// import cdUpload from "@/config/cloudinarySetup";

export default function AddMovie() {
  const [filmName, setFilmName] = useState("");
  const [filmGenre, setFilmGenre] = useState("");
  const [filmDescription, setFilmDescription] = useState("");
  const [filmImage, setFilmImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // let fileLink = cdUpload(filmImage);

  const handleClick = (e) => {
    e.preventDefault();

    const add = {
      name: filmName,
      genre: filmGenre,
      description: filmDescription,
      image: filmImage,
    };

    console.log(add);

    fetch("https://6517b49b582f58d62d351486.mockapi.io/filmlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    }).then(() => {
      console.log("post request success");
      setIsLoading(false);
    });
  };

  return (
    <>
      <Navbar />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              Add New Film
            </h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="pt-30">
                  <label
                    htmlFor="name"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="name"
                    name="name"
                    onChange={(event) => setFilmName(event.target.value)}
                    value={filmName}
                    aria-describedby="name"
                    placeholder="Enter your film's name"
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="genre"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Genre
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="genre"
                    name="genre"
                    onChange={(event) => setFilmGenre(event.target.value)}
                    value={filmGenre}
                    aria-describedby="genre"
                    placeholder="Enter your film's genre"
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="image"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control rounded-pill text-lg"
                    onChange={(event) => setFilmImage(event.target.files[0])}
                    value={filmImage}
                    id="image"
                    name="image"
                    aria-describedby="phone"
                    placeholder="Enter your film's image"
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="description"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="form-control rounded-4 text-lg "
                    onChange={(event) => setFilmDescription(event.target.value)}
                    value={filmDescription}
                    id="description"
                    cols="8"
                    rows="4"
                  ></textarea>
                </div>
                {!isLoading && (
                  <div className="button-group d-flex flex-column pt-50">
                    <button
                      type="submit"
                      className="btn btn-save fw-medium text-lg text-white rounded-pill"
                      role="button"
                      onClick={handleClick}
                    >
                      Add Film
                    </button>
                  </div>
                )}
                {isLoading && (
                  <div className="button-group d-flex flex-column pt-50">
                    <button
                      type="submit"
                      className="btn btn-save fw-medium text-lg text-white rounded-pill"
                      role="button"
                      onClick={handleClick}
                      disabled
                    >
                      Add Film
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
