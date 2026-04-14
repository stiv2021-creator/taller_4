import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
      <div className="container-fluid px-4 py-4">
        <div className="row text-center text-md-start">

          {/* SOBRE LA PÁGINA */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#0066cc" }}>
              💰 Control de Gastos
            </h5>
            <p className="small">
              Administra tus finanzas personales de forma sencilla y eficiente.
              Controla tus gastos diarios y mantén un presupuesto equilibrado.
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#0066cc" }}>
              Redes Sociales
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="#" className="text-dark text-decoration-none link-hover">
                Facebook
              </a>
              <a href="#" className="text-dark text-decoration-none link-hover">
                Instagram
              </a>
              <a href="#" className="text-dark text-decoration-none link-hover">
                Twitter
              </a>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#0066cc" }}>
              Información
            </h5>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="#" className="text-dark text-decoration-none link-hover">
                  Guía de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none link-hover">
                  Seguridad de datos
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none link-hover">
                  Soporte técnico
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div
          className="text-center pt-3 mt-3 small"
          style={{ borderTop: "1px solid #0066cc" }}
        >
          © {new Date().getFullYear()} Control de Gastos | Todos los derechos reservados
        </div>
      </div>

      {/* ESTILO HOVER */}
      <style>
        {`
          .link-hover:hover {
            color: #0066cc !important;
            transition: 0.3s;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;