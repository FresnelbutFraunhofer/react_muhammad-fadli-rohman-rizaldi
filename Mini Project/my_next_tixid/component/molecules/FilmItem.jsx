import React from "react";
import Image from "next/image";

export default function FilmItem({ film, title, genre, id }) {
  return (
    <div className="featured-game-card position-relative">
      <a href={`/detail/${id}`}>
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={film}
            width="205"
            height="270"
            alt=""
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="movie-icon mx-auto">
              <Image src="/film/blur.svg" width={54} height={36} alt="blur" />
            </div>
            <div>
              <p className="film-title fw-semibold text-white text-xl m-0">
                {title}
              </p>
              <p className="fw-light text-white m-0">{genre}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
