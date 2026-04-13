import React from "react";

// ✅ IMÁGENES DESDE ASSETS
import img1 from "../../../assets/img/new1.webp";
import img2 from "../../../assets/img/new2.jpg";
import img3 from "../../../assets/img/new3.jpg";

const Content = () => {
  return (
    <main
      className="container mt-0 mb-5 flex-grow-1 p-4 rounded"
      style={{ backgroundColor: "#0d0d0d", color: "#fff" }}
    >
      {/* TÍTULO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#ff2e2e" }}>
          Mejores opciones de gorras 🧢
        </h1>
        <p className="text-light">
          Descubre estilos, diseños y las más populares del momento
        </p>
      </div>

      {/* CARDS */}
      <div className="row g-4">
        
        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={img1}
                className="w-100 h-100"
                alt="Gorra Snapback"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-danger">🧢 Snapback</h5>
              <p className="card-text text-light">
                Ajustable, moderna y perfecta para un estilo urbano.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={img2}
                className="w-100 h-100"
                alt="Gorra Trucker"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-danger">🔥 Trucker</h5>
              <p className="card-text text-light">
                Con malla trasera, ideal para climas cálidos y looks casuales.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={img3}
                className="w-100 h-100"
                alt="Gorra Dad Hat"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-danger">👌 Dad Hat</h5>
              <p className="card-text text-light">
                Diseño curvo y cómodo, perfecto para un estilo relajado.
              </p>
            </div>
          </div>
        </div>

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

export default Content;