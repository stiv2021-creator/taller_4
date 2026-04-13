import React, { useContext } from "react";
import { BuysContext } from "../hooks/BuysContext";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box
} from "@mui/material";

export const Mybuys = () => {
  const { buys, removeBuy, total } = useContext(BuysContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, color: "#ff2e2e" }}>
        🛒 Carrito de Compras
      </Typography>

      {buys.length === 0 ? (
        <Typography>Tu carrito está vacío</Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center"
            }}
          >
            {buys.map((product) => (
              <Card
                key={product.id}
                sx={{
                  minWidth: 250,
                  flex: "1 1 250px",
                  backgroundColor: "#1a1a1a",
                  color: "#fff"
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={product.img}
                />

                <CardContent>
                  <Typography variant="h6" sx={{ color: "#ff2e2e" }}>
                    {product.name}
                  </Typography>

                  <Typography>
                    ${product.price.toLocaleString()}
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                    Cantidad: {product.quantity || 1}
                  </Typography>

                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={() => removeBuy(product.id)}
                  >
                    Eliminar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* TOTAL */}
          <Box sx={{ textAlign: "right", mt: 4 }}>
            <Typography variant="h5">
              Total:{" "}
              <span style={{ color: "#ff2e2e" }}>
                ${total.toLocaleString()}
              </span>
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Mybuys;