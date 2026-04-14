import React, { useState, useEffect } from "react";
import { useBuys } from "../../auth/hooks/BuysContext";

const Offers = () => {
  const { buys } = useBuys();
  const [selectedPeriod, setSelectedPeriod] = useState("mes");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Datos simulados de gastos por categoría
  const expensesByCategory = [
    { category: "🏠 Vivienda", amount: 850000, percentage: 35, color: "#0066cc" },
    { category: "🍔 Alimentación", amount: 450000, percentage: 25, color: "#28a745" },
    { category: "🚗 Transporte", amount: 280000, percentage: 15, color: "#ffc107" },
    { category: "💊 Salud", amount: 200000, percentage: 10, color: "#dc3545" },
    { category: "🎓 Educación", amount: 170000, percentage: 8, color: "#6f42c1" }
  ];

  // Datos simulados de gastos mensuales
  const monthlyExpenses = [
    { month: "Ene", amount: 1800000 },
    { month: "Feb", amount: 1650000 },
    { month: "Mar", amount: 1950000 },
    { month: "Abr", amount: 2100000 },
    { month: "May", amount: 1900000 },
    { month: "Jun", amount: 1750000 }
  ];

  // Transacciones recientes simuladas
  const recentTransactions = [
    { id: 1, category: "🏠 Vivienda", description: "Alquiler mensual", amount: 650000, date: "2024-06-01", type: "gasto" },
    { id: 2, category: "🍔 Alimentación", description: "Supermercado Éxito", amount: 125000, date: "2024-06-02", type: "gasto" },
    { id: 3, category: "🚗 Transporte", description: "Gasolina", amount: 85000, date: "2024-06-03", type: "gasto" },
    { id: 4, category: "💊 Salud", description: "Consulta médica", amount: 95000, date: "2024-06-04", type: "gasto" },
    { id: 5, category: "🎓 Educación", description: "Curso online", amount: 45000, date: "2024-06-05", type: "gasto" }
  ];

  const totalExpenses = expensesByCategory.reduce((acc, cat) => acc + cat.amount, 0);
  const averageMonthly = monthlyExpenses.reduce((acc, month) => acc + month.amount, 0) / monthlyExpenses.length;

  return (
    <main style={{ backgroundColor: "#f8f9fa", color: "#333", padding: "20px", minHeight: "100vh" }}>
      
      {/* HEADER DEL DASHBOARD */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#0066cc", marginBottom: "10px" }}>
          � Dashboard de Gastos
        </h2>
        <p className="text-muted">Visualiza y analiza tus finanzas personales</p>
      </div>

      {/* FILTROS */}
      <div className="row mb-4">
        <div className="col-md-6">
          <select 
            className="form-select" 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={{ borderColor: "#0066cc" }}
          >
            <option value="mes">Último mes</option>
            <option value="trimestre">Último trimestre</option>
            <option value="año">Último año</option>
          </select>
        </div>
        <div className="col-md-3">
          <select 
            className="form-select" 
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
          >
            <option value="0">Enero</option>
            <option value="1">Febrero</option>
            <option value="2">Marzo</option>
            <option value="3">Abril</option>
            <option value="4">Mayo</option>
            <option value="5">Junio</option>
          </select>
        </div>
        <div className="col-md-3">
          <select 
            className="form-select" 
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      {/* TARJETAS DE RESUMEN */}
      <div className="row mb-5">
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <h6 className="text-muted mb-2">Total Gastado</h6>
              <h3 className="fw-bold" style={{ color: "#dc3545" }}>
                ${totalExpenses.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
              </h3>
              <small className="text-success">+12% vs mes anterior</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <h6 className="text-muted mb-2">Promedio Mensual</h6>
              <h3 className="fw-bold" style={{ color: "#0066cc" }}>
                ${(averageMonthly / 1000).toLocaleString()}
              </h3>
              <small className="text-muted">Últimos 6 meses</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <h6 className="text-muted mb-2">Categoría Principal</h6>
              <h3 className="fw-bold" style={{ color: "#28a745" }}>
                🏠 Vivienda
              </h3>
              <small className="text-muted">35% del total</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body text-center">
              <h6 className="text-muted mb-2">Transacciones</h6>
              <h3 className="fw-bold" style={{ color: "#ffc107" }}>
                {buys.reduce((acc, item) => acc + (item.quantity || 1), 0)}
              </h3>
              <small className="text-muted">Este mes</small>
            </div>
          </div>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className="row mb-5">
        {/* GRÁFICO CIRCULAR */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <h5 className="card-title text-center mb-4" style={{ color: "#0066cc" }}>
                📊 Gastos por Categoría
              </h5>
              <div className="d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                <div style={{ position: "relative", width: "200px", height: "200px" }}>
                  {/* Simulación de gráfico circular */}
                  {expensesByCategory.map((cat, index) => {
                    const angle = (index * 360) / expensesByCategory.length;
                    const startAngle = (angle - 90) * Math.PI / 180;
                    const endAngle = ((angle + (360 / expensesByCategory.length)) - 90) * Math.PI / 180;
                    const x1 = 100 + 80 * Math.cos(startAngle);
                    const y1 = 100 + 80 * Math.sin(startAngle);
                    const x2 = 100 + 80 * Math.cos(endAngle);
                    const y2 = 100 + 80 * Math.sin(endAngle);
                    
                    return (
                      <div key={cat.category}>
                        <svg width="200" height="200" style={{ position: "absolute", top: 0, left: 0 }}>
                          <path
                            d={`M 100 100 L ${x1} ${y1} A 80 80 0 0 1 ${x2} ${y2} Z`}
                            fill={cat.color}
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                        </svg>
                        <div style={{
                          position: "absolute",
                          top: `${100 + 60 * Math.sin((startAngle + endAngle) / 2)}px`,
                          left: `${100 + 60 * Math.cos((startAngle + endAngle) / 2)}px`,
                          transform: "translate(-50%, -50%)",
                          fontSize: "11px",
                          color: "#333",
                          backgroundColor: "#ffffff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }}>
                          {cat.category}
                          <br />
                          <span style={{ fontWeight: "bold", color: cat.color }}>
                            {cat.percentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRÁFICO DE BARRAS */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <h5 className="card-title text-center mb-4" style={{ color: "#0066cc" }}>
                📈 Evolución Mensual
              </h5>
              <div style={{ height: "250px" }}>
                {monthlyExpenses.map((month, index) => {
                  const maxValue = Math.max(...monthlyExpenses.map(m => m.amount));
                  const barHeight = (month.amount / maxValue) * 200;
                  
                  return (
                    <div key={month.month} style={{
                      display: "inline-block",
                      width: `${100 / monthlyExpenses.length}%`,
                      height: "250px",
                      textAlign: "center",
                      verticalAlign: "bottom"
                    }}>
                      <div style={{
                        backgroundColor: "#0066cc",
                        width: "60%",
                        height: `${barHeight}px`,
                        margin: "0 auto",
                        borderRadius: "3px 3px 0 0"
                      }}></div>
                      <div style={{ fontSize: "11px", color: "#666", marginTop: "5px" }}>
                        {month.month}
                      </div>
                      <div style={{ fontSize: "10px", color: "#333", fontWeight: "bold" }}>
                        ${(month.amount / 1000).toFixed(1)}k
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLA DE TRANSACCIONES RECIENTES */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <h5 className="card-title mb-4" style={{ color: "#0066cc" }}>
                📋 Transacciones Recientes
              </h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr style={{ backgroundColor: "#f8f9fa" }}>
                      <th>Fecha</th>
                      <th>Categoría</th>
                      <th>Descripción</th>
                      <th className="text-end">Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td style={{ fontSize: "14px" }}>{transaction.date}</td>
                        <td style={{ fontSize: "14px" }}>{transaction.category}</td>
                        <td style={{ fontSize: "14px" }}>{transaction.description}</td>
                        <td className="text-end" style={{ 
                          fontSize: "14px", 
                          fontWeight: "bold", 
                          color: "#dc3545" 
                        }}>
                          -${(transaction.amount / 1000).toLocaleString()} COP
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offers;