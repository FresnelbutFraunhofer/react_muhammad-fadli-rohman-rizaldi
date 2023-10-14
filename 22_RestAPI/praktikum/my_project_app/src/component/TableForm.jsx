import React from "react";
// import ModalAlert from "./ModalAlert";
// import { useNavigate } from "react-router-dom";
import styles from "./TableForm.module.css";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

function TableForm() {
  // const navigate = useNavigate();

  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("https://6517b49b582f58d62d351486.mockapi.io/products");

  // const [confirmDelete, setConfirmDelete] = useState(null);

  // const handleDelete = (id) => {
  //   setConfirmDelete(id);
  // };

  // const handleConfirmDelete = () => {
  //   onDeleteProduct(confirmDelete);
  //   setConfirmDelete(null);
  // };

  // const handleCancelDelete = () => {
  //   setConfirmDelete(null);
  // };

  // const action = (e) => {
  //   e.preventDefault();
  //   navigate(`/${product.id}`);
  // };

  return (
    <>
      {isLoading && <div>Loading the blog...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div className="contain">
          <div className="table mb-5 text-center">
            <h2>Product Table</h2>
            <table className={styles.producttable}>
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
                {blog.map((product) => (
                  <tr key={product.id}>
                    <td style={{ color: "black" }}>
                      <Link to={`/products/${product.id}`}>
                        {product.number}
                      </Link>
                    </td>
                    <td>{product.pname}</td>
                    <td>{product.pcategory}</td>
                    {/* <td>
                    <img
                      src={URL.createObjectURL(product.pimage)}
                      alt={product.pname}
                      width="200"
                      height="150"
                    />
                  </td> */}
                    <td>{product.pfreshness}</td>
                    <td>Rp. {product.price}</td>
                    <td>
                      <button
                        className="button-red"
                        onClick={() => {
                          fetch(
                            "https://6517b49b582f58d62d351486.mockapi.io/products/" +
                              product.id,
                            {
                              method: "DELETE",
                            }
                          ).then(() => {
                            alert(`delete for ${product.number} success`);
                          });
                        }}
                      >
                        Delete
                      </button>
                      <button className="button-green">
                        <Link to={`/update/${product.id}`}>Edit</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* {confirmDelete && (
          <ModalAlert
            confirmDelete={handleConfirmDelete}
            cancelDelete={handleCancelDelete}
          />
        )} */}
        </div>
      )}
    </>
  );
}

export default TableForm;
