import React, { useState } from "react";

export default function aboutus() {
  const [count, setCount] = useState(0);

  // Fungsi untuk menambahkan nilai count
  const increment = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangkan nilai count
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <p>About Us</p>
      <div className="counter pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Jumlah Tiket
        </p>
        <button onClick={decrement}>-</button>
        <span className="mx-3">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
