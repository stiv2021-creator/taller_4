import React from "react";

// ✅ IMÁGENES DESDE ASSETS (CORRECTO EN VITE)
import img1 from "../../../assets/img/casa.jpg";
import img2 from "../../../assets/img/alimentacion.jpg";
import img3 from "../../../assets/img/trasnporte.jpg";
import img4 from "../../../assets/img/salud.jpg";
import img5 from "../../../assets/img/educacion.jpg";

const categoriesData = [
  { id: 1, name: "🏠 Vivienda", description: "Alquiler, servicios, mantenimiento", img: img1 },
  { id: 2, name: "🍔 Alimentación", description: "Supermercado, restaurantes, delivery", img: img2 },
  { id: 3, name: "🚗 Transporte", description: "Combustible, transporte público", img: img3 },
  { id: 4, name: "💊 Salud", description: "Medicinas, consultas, seguros", img: img4 },
  { id: 5, name: "🎓 Educación", description: "Matrícula, libros, cursos", img: img5 }
];

const Article = () => {

  return (
    <main style={{ backgroundColor: "#f8f9fa", color: "#333", padding: "40px" }}>
      
      <h2 style={{ textAlign: "center", color: "#0066cc", marginBottom: "40px" }}>
        Categorías de Gastos 💰
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {categoriesData.map((category) => (
          <div
            key={category.id}
            style={{
              width: "250px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            <div style={{ height: "200px" }}>
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "15px", textAlign: "center" }}>
              <h4 style={{ color: "#0066cc" }}>{category.name}</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>{category.description}</p>

            </div>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Article;