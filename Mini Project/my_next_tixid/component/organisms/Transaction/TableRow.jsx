import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TableRow({
  image,
  title,
  genre,
  ticket,
  price,
  id,
  total,
}) {
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {genre}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{ticket}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp. {total * price}</p>
      </td>
      <td>
        <div>
          <button className="btn btn-status rounded-pill text-sm">
            <Link href={`/edit/${id}`}>Edit</Link>
          </button>
          <button
            className="btn btn-status rounded-pill text-sm"
            onClick={() => {
              fetch(
                "https://6538fbf8a543859d1bb24f4e.mockapi.io/datacheckout/" +
                  id,
                {
                  method: "DELETE",
                }
              ).then(() => {
                alert(`delete for ${title} success`);
              });
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
