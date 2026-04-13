import React, { createContext, useContext, useState } from "react";

export const BuysContext = createContext();

// Hook personalizado seguro
export const useBuys = () => {
  const context = useContext(BuysContext);

  if (!context) {
    throw new Error("useBuys debe usarse dentro de un BuysProvider");
  }

  return context;
};

export const BuysProvider = ({ children }) => {
  const [buys, setBuys] = useState([]);

  // ✅ Agregar producto (sin duplicar, suma cantidad)
  const addBuy = (product) => {
    setBuys((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Eliminar producto
  const removeBuy = (id) => {
    setBuys((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Vaciar carrito
  const clearBuys = () => {
    setBuys([]);
  };

  // ✅ Total con cantidades
  const total = buys.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <BuysContext.Provider
      value={{
        buys,
        addBuy,
        removeBuy,
        clearBuys,
        total
      }}
    >
      {children}
    </BuysContext.Provider>
  );
};