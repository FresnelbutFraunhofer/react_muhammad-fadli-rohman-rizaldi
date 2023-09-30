import React, { useState } from "react";

function ProductTable({ products, onDeleteProduct, onEditProduct }) {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleDelete = (id) => {
    setConfirmDelete(id);
  };

  const handleConfirmDelete = () => {
    onDeleteProduct(confirmDelete);
    setConfirmDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>Rp. {product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button onClick={() => onEditProduct(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {confirmDelete && (
        <div>
          <p>Are you sure you want to delete this product?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
