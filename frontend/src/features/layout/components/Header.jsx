import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // ✅ Estado del usuario
  const [user, setUser] = useState(null);

  // ✅ Detectar sesión
  useEffect(() => {
    const checkUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    checkUser();

    window.addEventListener("storage", checkUser);
    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // ⚠️ Corregido: Coincide con el path '/Myaccount' de App.js
    navigate("/Myaccount");
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg shadow-sm py-3"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container-fluid px-4">
          {/* LOGO */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 text-decoration-none"
            style={{ color: "#0066cc" }}
          >
            💰 <span>Control de Gastos</span>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3 align-items-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-dark">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/Article' con A mayúscula */}
                <NavLink to="/Article" className="nav-link text-dark">
                  Categorías
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/Offers' con O mayúscula */}
                <NavLink to="/Offers" className="nav-link text-dark">
                  Estadísticas
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/ApiRyc' con A mayúscula */}
                <NavLink to="/ApiRyc" className="nav-link text-dark">
                  Api
                </NavLink>
              </li>

              {/* 🔐 SI NO HAY SESIÓN */}
              {!user && (
                <li className="nav-item">
                  {/* ⚠️ Corregido: '/Myaccount' con M mayúscula */}
                  <NavLink to="/Myaccount" className="nav-link text-dark">
                    Cuenta
                  </NavLink>
                </li>
              )}

              {/* 🔓 SI HAY SESIÓN */}
              {user && (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-dark">
                      👤 {user.email}
                    </span>
                  </li>

                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#0066cc",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </>
              )}
            </ul>
          
          {/* ENLACE A GITHUB */}
          <div className="ms-3">
            <a 
              href="https://github.com/stiv2021-creator/taller_4.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: "#0066cc",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 16px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0056b3";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0066cc";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.373 12 12 12 5.373 12 12-5.373 12-12zm0 18.5c-1.976 0-3.71.524-3.71-3.71 0-2.057.842-3.71 1.842 0 2.057.842 3.71 3.71 1.842 0 3.71-.842 3.71-3.71zm-6-.218c.351-.21.683-.827.683-1.431 0-1.104-.472-1.832-1.04-2.03-.379-.699-1.12-1.17-1.832-1.17-.612.491-1.382-.877-1.832-.877-.53 0-1.006.292-1.433.877-1.433.877 0-1.006-.292-1.433-.877-1.433.877z"/>
              </svg>
              GitHub
            </a>
          </div>
          
          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-link:hover {
            color: #0066cc !important;
          }
        `}
      </style>
    </header>
  );
};

export default Header;