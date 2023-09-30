import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import NavigationBar from "../component/NavigationBar";
import FormPage from "../component/FormPage";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const nav = useNavigate();

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
    console.log(product);
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
    <div>
      <NavigationBar />
      <Header />
      <button onClick={()=>{nav('/landing/')}}>To Landing Page</button>
      <FormPage
        onCreateProduct={addProduct}
        products={products}
        onDeleteProduct={deleteProduct}
        onEditProduct={editSelectedProduct}
      />
    </div>
  );
}

export default HomePage;
