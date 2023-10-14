import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateProduct({ onCreateProduct}) {
  const [product, setProduct] = useState({id: uuidv4(), name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(product);
    setProduct({ id: uuidv4(), name: '', price: '' });
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
