import React, {useState} from "react";
import ModalAlert from "./ModalAlert";

function TableForm({products, onDeleteProduct, onEditProduct}) {
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
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.pname}</td>
              <td>{product.pcategory}</td>
              <td>{product.pfreshness}</td>
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
          <ModalAlert confirmDelete={handleConfirmDelete} cancelDelete={handleCancelDelete}/>
      )}
    </div>
  );
}

export default TableForm;