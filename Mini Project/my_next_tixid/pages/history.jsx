import TableRow from "@/component/organisms/Transaction/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "@/component/organisms/Navbar/Navbar";

export default function history() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = async () => {
    const resp = await axios.get(
      "https://6538fbf8a543859d1bb24f4e.mockapi.io/datacheckout"
    );
    console.log(resp.data);
    setHistory(resp.data);
  };

  return (
    <>
      <Navbar />
      <section className="transactions overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">History</h2>

            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content"></div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Riwayat Konfirmasi
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="" scope="col">
                        Film
                      </th>
                      <th scope="col">Ticket</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="list_status_item">
                    {history.map((item) => {
                      return (
                        <TableRow
                          image={item.dataFilm.image}
                          key={item.id}
                          total={item.total}
                          title={item.dataFilm.name}
                          genre={item.dataFilm.genre}
                          ticket={item.nominalItems.type}
                          price={item.nominalItems.price}
                          id={item.id}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
