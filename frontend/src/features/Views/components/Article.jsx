import React from "react";
import { useBuys } from "../../auth/hooks/BuysContext";

// ✅ IMÁGENES DESDE ASSETS (CORRECTO EN VITE)
import img1 from "../../../assets/img/new1.webp";
import img2 from "../../../assets/img/new2.jpg";
import img3 from "../../../assets/img/new3.jpg";
import img4 from "../../../assets/img/new4.jpg";
import img5 from "../../../assets/img/new5.jpg";
import img6 from "../../../assets/img/new6.jpg";
import img7 from "../../../assets/img/new7.jpg";
import img8 from "../../../assets/img/new8.jpg";
import img9 from "../../../assets/img/new9.jpg";
import img10 from "../../../assets/img/new10.jpg";
import img11 from "../../../assets/img/new11.jpg";
import img12 from "../../../assets/img/new12.jpg";

const capsData = [
  { id: 1, name: "Snapback Negra", price: 50000, img: img1 },
  { id: 2, name: "Trucker Roja", price: 55000, img: img2 },
  { id: 3, name: "Dad Hat Beige", price: 48000, img: img3 },
  { id: 4, name: "Snapback Blanca", price: 52000, img: img4 },
  { id: 5, name: "Trucker Negra", price: 57000, img: img5 },
  { id: 6, name: "Dad Hat Negra", price: 49000, img: img6 },
  { id: 7, name: "Snapback Roja", price: 53000, img: img7 },
  { id: 8, name: "Trucker Blanca", price: 56000, img: img8 },
  { id: 9, name: "Dad Hat Azul", price: 47000, img: img9 },
  { id: 10, name: "Snapback Gris", price: 51000, img: img10 },
  { id: 11, name: "Trucker Verde", price: 58000, img: img11 },
  { id: 12, name: "Dad Hat Roja", price: 49500, img: img12 }
];

const Article = () => {
  const { addBuy, buys } = useBuys();

  return (
    <main style={{ backgroundColor: "#0d0d0d", color: "#fff", padding: "40px" }}>
      
      <h2 style={{ textAlign: "center", color: "#ff2e2e", marginBottom: "40px" }}>
        Catálogo de Gorras 🧢
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {capsData.map((cap) => (
          <div
            key={cap.id}
            style={{
              width: "250px",
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            <div style={{ height: "200px" }}>
              <img
                src={cap.img}
                alt={cap.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "15px", textAlign: "center" }}>
              <h4 style={{ color: "#ff2e2e" }}>{cap.name}</h4>
              <p>${cap.price.toLocaleString()}</p>

              <button
                onClick={() => addBuy(cap)}
                style={{
                  backgroundColor: "#ff2e2e",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "5px"
                }}
              >
                Agregar 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        🛒 Productos en carrito:{" "}
        <span style={{ color: "#ff2e2e" }}>
          {buys.reduce((acc, item) => acc + (item.quantity || 1), 0)}
        </span>
      </h3>

    </main>
  );
};

export default Article;