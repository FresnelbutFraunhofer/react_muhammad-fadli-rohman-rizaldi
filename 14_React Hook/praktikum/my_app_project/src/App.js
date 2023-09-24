import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import FormPage from "./component/FormPage";
import TableForm from "./component/TableForm";

function App() {
  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      alert("Welcome");
    }, 2000);

    return () => clearTimeout(alertTimeOut);
  }, []);

  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editSelectedProduct = (product) => {
    setEditProduct(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? { ...updatedProduct, id: product.id }
          : product
      )
    );
    setEditProduct(null);
  };

  return (
    <>
      <HomePage />
      <FormPage onCreateProduct={addProduct} />
      <TableForm
        products={products}
        onDeleteProduct={deleteProduct}
        onEditProduct={editSelectedProduct}
      />
      {editProduct && (
        <TableForm onCreateProduct={updateProduct} products={editProduct} />
      )}
    </>
  );
}

export default App;
