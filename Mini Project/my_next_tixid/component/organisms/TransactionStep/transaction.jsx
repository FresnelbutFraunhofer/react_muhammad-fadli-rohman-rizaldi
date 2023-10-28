import React from "react";
import Image from "next/image";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Start Your Movie
          <br /> Journey at PolimorphTIX
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <Image
                src="/img/start.svg"
                className="mb-30"
                width={80}
                height={80}
              />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                1. Start (<a href="/airecommendation">Rekomendasi AI</a>)
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Pilih salah film
                <br />
                yang ingin kamu nikmati
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <Image
                src="/img/bookmovie.svg"
                className="mb-30"
                width={80}
                height={80}
              />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                2. Book Your Movie
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Pesan sesuai dengan
                <br />
                pilihanmu yang sudah tersedia
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card border-0">
              <Image
                src="/img/getready.svg"
                className="mb-30"
                width={80}
                height={80}
              />
              <p className="fw-semibold text-2xl mb-2 color-palette-1">
                3. Get Ready
              </p>
              <p className="text-lg color-palette-1 mb-0">
                Siap digunakan untuk
                <br />
                pengalaman nontonmu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
