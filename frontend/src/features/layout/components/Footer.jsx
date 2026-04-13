import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d0d0d", color: "#fff" }} className="mt-auto">
      <div className="container-fluid px-4 py-4">
        <div className="row text-center text-md-start">

          {/* SOBRE LA PÁGINA */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#ff2e2e" }}>
              🧢 Gorras Store
            </h5>
            <p className="small">
              Encuentra las mejores gorras con estilos urbanos, deportivos y modernos
              para complementar tu outfit.
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#ff2e2e" }}>
              Redes Sociales
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="#" className="text-white text-decoration-none link-hover">
                Facebook
              </a>
              <a href="#" className="text-white text-decoration-none link-hover">
                Instagram
              </a>
              <a href="#" className="text-white text-decoration-none link-hover">
                Twitter
              </a>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold" style={{ color: "#ff2e2e" }}>
              Información
            </h5>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="#" className="text-white text-decoration-none link-hover">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none link-hover">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none link-hover">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div
          className="text-center pt-3 mt-3 small"
          style={{ borderTop: "1px solid #ff2e2e" }}
        >
          © {new Date().getFullYear()} Gorras Store | Todos los derechos reservados
        </div>
      </div>

      {/* ESTILO HOVER */}
      <style>
        {`
          .link-hover:hover {
            color: #ff2e2e !important;
            transition: 0.3s;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;