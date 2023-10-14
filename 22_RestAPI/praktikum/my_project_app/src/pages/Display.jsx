import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function Display() {
  const { id } = useParams();
  console.log(id);
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("https://6517b49b582f58d62d351486.mockapi.io/products/" + id);
  // const nav = useNavigate();

  // const sentence = `;

  return (
    <div>
      {isLoading && <div>Loading page...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h1 className="text-center">Display Page</h1>
          <p className="text-center">ID: {blog.number}</p>
          <p className="text-center">Product Name: {blog.pname}</p>
          <p className="text-center"> Product Category: {blog.pcategory}</p>
          <p className="text-center">Product Freshness: {blog.pfreshness}</p>
          <p className="text-center">Price: Rp. {blog.price}</p>
        </div>
      )}
    </div>
  );
}

export default Display;
