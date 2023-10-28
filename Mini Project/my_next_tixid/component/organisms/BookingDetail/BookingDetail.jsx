import React, { useEffect, useState } from "react";

export default function BookingDetail() {
  const [dataDetail, setDataDetail] = useState({
    timeItems: {
      time: "",
    },
    nominalItems: {
      price: 0,
      type: "",
    },
    paymentItems: {
      type: "",
      // bankName: '',
      noRek: "",
    },
    bankAccount: "",
    total: "",
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("payment-item");
    const dataItemLocal = JSON.parse(dataFromLocal);
    setDataDetail(dataItemLocal);
  });
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Jam Tayang{" "}
          <span className="purchase-details">
            {dataDetail.timeItems.time} WIB
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          {dataDetail.nominalItems.type}{" "}
          <span className="purchase-details">
            Rp. {dataDetail.nominalItems.price}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            {dataDetail.total} x Rp. {dataDetail.nominalItems.price}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            Rp.{" "}
            {dataDetail.total * dataDetail.nominalItems.price +
              (dataDetail.total * dataDetail.nominalItems.price * 10) / 100}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            Rp.{" "}
            {dataDetail.total * dataDetail.nominalItems.price +
              (dataDetail.total * dataDetail.nominalItems.price * 10) / 100}
          </span>
        </p>
      </div>

      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataDetail.bankAccount}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataDetail.paymentItems.type}
          </span>
        </p>
        {/* <p className="text-lg color-palette-1 mb-20">
          Bank Name <span className="payment-details">Mandiri</span>
        </p> */}
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">PT TIX Chemistry Indonesia</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataDetail.paymentItems.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
