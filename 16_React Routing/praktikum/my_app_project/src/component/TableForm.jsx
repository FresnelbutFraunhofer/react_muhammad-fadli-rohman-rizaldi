import React, { useState } from "react";
import ModalAlert from "./ModalAlert";
import { useNavigate } from "react-router-dom";

function TableForm({ products, onDeleteProduct, onEditProduct}) {
 
  const navigate = useNavigate();
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

  const action = (e) => {
    e.preventDefault();
    navigate(`/${products.id}`, {state: products})
  };

  return (
    <>
      <div className="mb-5 text-center">
        <h2 >Product Table</h2>
        <table className="">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.pname}</td>
                <td>{product.pcategory}</td>
                <td>{product.pfreshness}</td>
                <td>Rp. {product.price}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                  <button onClick={() => onEditProduct(product)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {confirmDelete && (
          <ModalAlert
            confirmDelete={handleConfirmDelete}
            cancelDelete={handleCancelDelete}
          />
        )}
      </div>
    </>
  );
}

export default TableForm;
