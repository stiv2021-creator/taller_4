import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useBuys } from "../../auth/hooks/BuysContext";

const Header = () => {
  const navigate = useNavigate();

  // ✅ Estado del usuario
  const [user, setUser] = useState(null);

  // ✅ Obtener compras
  const { buys } = useBuys();
  const totalItems = buys.reduce((acc, item) => acc + (item.quantity || 1), 0);

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
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="container-fluid px-4">
          {/* LOGO */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 text-decoration-none"
            style={{ color: "#ff2e2e" }}
          >
            🧢 <span>Gorras Store</span>
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
                <NavLink to="/" className="nav-link text-white">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/Article' con A mayúscula */}
                <NavLink to="/Article" className="nav-link text-white">
                  Catálogo
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/Offers' con O mayúscula */}
                <NavLink to="/Offers" className="nav-link text-white">
                  Ofertas
                </NavLink>
              </li>

              <li className="nav-item">
                {/* ⚠️ Corregido: '/ApiRyc' con A mayúscula */}
                <NavLink to="/ApiRyc" className="nav-link text-white">
                  Api
                </NavLink>
              </li>

              {/* 🛒 CARRITO */}
              <li className="nav-item position-relative">
                {/* ⚠️ Corregido: '/Mybuys' con M mayúscula */}
                <NavLink to="/Mybuys" className="nav-link text-white">
                  🛒
                  {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                  )}
                </NavLink>
              </li>

              {/* 🔐 SI NO HAY SESIÓN */}
              {!user && (
                <li className="nav-item">
                  {/* ⚠️ Corregido: '/Myaccount' con M mayúscula */}
                  <NavLink to="/Myaccount" className="nav-link text-white">
                    Cuenta
                  </NavLink>
                </li>
              )}

              {/* 🔓 SI HAY SESIÓN */}
              {user && (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-white">
                      👤 {user.email}
                    </span>
                  </li>

                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#ff2e2e",
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
          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-link:hover {
            color: #ff2e2e !important;
          }

          .cart-badge {
            position: absolute;
            top: -5px;
            right: -10px;
            background: #ff2e2e;
            color: white;
            font-size: 10px;
            padding: 3px 6px;
            border-radius: 50%;
          }
        `}
      </style>
    </header>
  );
};

export default Header;