import React from "react";
import { useBuys } from "../../auth/hooks/BuysContext";

// ✅ IMÁGENES DESDE ASSETS
import img1 from "../../../assets/img/new1.webp";
import img2 from "../../../assets/img/new3.jpg";
import img3 from "../../../assets/img/new4.jpg";
import img4 from "../../../assets/img/new10.jpg";
import img5 from "../../../assets/img/new6.jpg";

const offersData = [
  { id: 1, name: "Snapback Negra", oldPrice: 60000, price: 45000, img: img1 },
  { id: 2, name: "Trucker Roja", oldPrice: 65000, price: 50000, img: img2 },
  { id: 3, name: "Dad Hat Beige", oldPrice: 55000, price: 42000, img: img3 },
  { id: 4, name: "Snapback Blanca", oldPrice: 62000, price: 48000, img: img4 },
  { id: 5, name: "Trucker Negra", oldPrice: 67000, price: 51000, img: img5 }
];

const Offers = () => {
  const { addBuy, buys } = useBuys();

  return (
    <main
      className="container my-5 p-4 rounded"
      style={{ backgroundColor: "#0d0d0d", color: "#fff" }}
    >
      {/* TITULO */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#ff2e2e" }}>
          🔥 Ofertas Especiales
        </h2>
        <p className="text-light">Aprovecha los mejores descuentos</p>
      </div>

      {/* GRID */}
      <div className="row g-4 justify-content-center">
        {offersData.map((cap) => (
          <div className="col-md-4 col-lg-3" key={cap.id}>
            <div className="card h-100 custom-card position-relative">

              <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                OFERTA
              </span>

              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={cap.img}
                  alt={cap.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="card-body text-center">
                <h6 className="text-danger">{cap.name}</h6>

                <p className="mb-1 text-muted text-decoration-line-through">
                  ${cap.oldPrice.toLocaleString()}
                </p>

                <p className="fw-bold" style={{ color: "#ff2e2e" }}>
                  ${cap.price.toLocaleString()}
                </p>

                <button
                  className="btn btn-danger w-100"
                  onClick={() => addBuy(cap)}
                >
                  Agregar al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTADOR */}
      <div className="text-center mt-4">
        <h5>
          🛒 Productos en carrito:{" "}
          <span style={{ color: "#ff2e2e" }}>
            {buys.reduce((acc, item) => acc + (item.quantity || 1), 0)}
          </span>
        </h5>
      </div>

      {/* ESTILOS */}
      <style>
        {`
          .custom-card {
            background-color: #1a1a1a;
            border: none;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .custom-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(255, 46, 46, 0.4);
          }
        `}
      </style>
    </main>
  );
};

export default Offers;