import React from "react";

// ✅ IMÁGENES DESDE ASSETS
import viviendaImg from "../../../assets/img/casa.jpg";
import alimentacionImg from "../../../assets/img/alimentacion.jpg";
import transporteImg from "../../../assets/img/trasnporte.jpg";

const Content = () => {
  return (
    <main
      className="container mt-0 mb-5 flex-grow-1 p-4 rounded"
      style={{ backgroundColor: "#f8f9fa", color: "#333" }}
    >
      {/* TÍTULO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#0066cc" }}>
          Control de Gastos Diarios 💰
        </h1>
        <p className="text-muted">
          Administra tus finanzas personales de manera sencilla y eficiente
        </p>
      </div>

      {/* TARJETAS DE RESUMEN FINANCIERO */}
      <div className="row mb-5">
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <div className="mb-3">
                <span style={{ fontSize: "2rem", color: "#0066cc" }}>📊</span>
              </div>
              <h6 className="text-muted mb-2">Presupuesto Mensual</h6>
              <h4 className="fw-bold" style={{ color: "#28a745" }}>$2500000 COP</h4>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div 
                  className="progress-bar bg-success" 
                  style={{ width: "65%", backgroundColor: "#28a745" }}
                ></div>
              </div>
              <small className="text-muted">65% utilizado ($1625000 COP gastado)</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <div className="mb-3">
                <span style={{ fontSize: "2rem", color: "#dc3545" }}>💸</span>
              </div>
              <h6 className="text-muted mb-2">Gastos del Mes</h6>
              <h4 className="fw-bold" style={{ color: "#dc3545" }}>$1625000</h4>
              <small className="text-success">-12% vs mes anterior</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <div className="mb-3">
                <span style={{ fontSize: "2rem", color: "#ffc107" }}>💎</span>
              </div>
              <h6 className="text-muted mb-2">Ahorro Acumulado</h6>
              <h4 className="fw-bold" style={{ color: "#ffc107" }}>$875000</h4>
              <small className="text-muted">35% de tus ingresos</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <div className="mb-3">
                <span style={{ fontSize: "2rem", color: "#6f42c1" }}>🎯</span>
              </div>
              <h6 className="text-muted mb-2">Meta Mensual</h6>
              <h4 className="fw-bold" style={{ color: "#6f42c1" }}>$500000</h4>
              <small className="text-success">¡Meta alcanzada! 🎉</small>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS DE CATEGORÍAS */}
      <div className="row g-4 mb-5">
        
        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={viviendaImg}
                className="w-100 h-100"
                alt="Gastos de Vivienda"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-primary">🏠 Vivienda</h5>
              <p className="card-text text-muted">
                Controla gastos de alquiler, servicios y mantenimiento del hogar.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={alimentacionImg}
                className="w-100 h-100"
                alt="Gastos de Alimentación"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-primary">🍔 Alimentación</h5>
              <p className="card-text text-muted">
                Registra tus gastos en supermercado, restaurantes y delivery.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="card h-100 custom-card">
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={transporteImg}
                className="w-100 h-100"
                alt="Gastos de Transporte"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-primary">🚗 Transporte</h5>
              <p className="card-text text-muted">
                Gestiona gastos en combustible, transporte público y mantenimiento.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* CONSEJOS DE AHORRO */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <h5 className="card-title text-center mb-4" style={{ color: "#0066cc" }}>
                💡 Consejos para Optimizar tus Gastos
              </h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>📱</span>
                    <div>
                      <h6 className="fw-bold">Usa Apps de Presupuesto</h6>
                      <p className="text-muted small mb-0">
                        Aplicaciones como Finton, Mint o YNAB te ayudan a categorizar gastos automáticamente y establecer límites.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>🛒</span>
                    <div>
                      <h6 className="fw-bold">Compara Precios</h6>
                      <p className="text-muted small mb-0">
                        Antes de comprar, compara precios en diferentes tiendas. Usa cupones y busca descuentos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>🎯</span>
                    <div>
                      <h6 className="fw-bold">Establece Metas</h6>
                      <p className="text-muted small mb-0">
                        Fija metas de ahorro realistas. Comienza con pequeñas cantidades y aumenta gradualmente.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>📊</span>
                    <div>
                      <h6 className="fw-bold">Revisa Mensualmente</h6>
                      <p className="text-muted small mb-0">
                        Dedica 30 minutos cada mes para revisar tus gastos y ajustar tu presupuesto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS */}
      <style>
        {`
          .custom-card {
            background-color: #ffffff;
            border: none;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .custom-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0, 102, 204, 0.4);
          }
        `}
      </style>
    </main>
  );
};

export default Content;