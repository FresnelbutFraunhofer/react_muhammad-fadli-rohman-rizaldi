import BookingConfirmation from "@/component/organisms/BookingConfirmation/BookingConfirmation.jsx/BookingConfirmation";
import BookingDetail from "@/component/organisms/BookingDetail/BookingDetail";
import BookingItem from "@/component/organisms/BookingItem/BookingItem";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function checkout() {
  const [dataItem, setDataItem] = useState({
    dataFilm: "",
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("payment-item");
    const dataItemLocal = JSON.parse(dataFromLocal);
    setDataItem(dataItemLocal);
  }, []);

  console.log(dataItem);

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/logo1.png" width={60} height={60} />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 classNameName="text-4xl fw-bold color-palette-1 mb-10">
            Booking Confirm
          </h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya menciptakan pengalaman menontonmu
          </p>
        </div>
        <BookingItem dataItem={dataItem} />
        <hr />
        <BookingDetail />
        <BookingConfirmation />
      </div>
    </section>
  );
}
