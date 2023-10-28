import React from "react";

export default function BookingConfirmation() {
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <div className="confirm d-md-block d-flex flex-column w-100 pt-50 column-gap-3">
        <a
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg me-3"
          href="/complete-checkout"
          role="button"
        >
          Confirm Payment
        </a>
        <a
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg "
          href="/"
          role="button"
        >
          Back to Dashboard
        </a>
      </div>
    </>
  );
}
