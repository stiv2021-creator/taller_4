import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ApiRyC = () => {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [page]);

  return (
    <div style={{ 
    backgroundColor: "#f8f9fa", 
    padding: "20px",
    paddingTop: "1px"
    }}>
      
      {/* TÍTULO */}
        <h1 style={{ 
        color: "#0066cc", 
        textAlign: "center",
        marginTop: "0",
        marginBottom: "30px"
        }}>
        API de Gastos 💰
        </h1>

      {/* GRID DE PERSONAJES */}
      <Grid container spacing={3}>
        {characters?.map((char) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
            <Card 
              sx={{ 
                borderRadius: 3, 
                boxShadow: 5, 
                backgroundColor: "#ffffff",
                color: "#333",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 15px #0066cc"
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={char.image}
                alt={char.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#333" }}>
                  {char.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {char.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* BOTONES DE NAVEGACIÓN */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={() => setPage(page - 1)}
          disabled={!info.prev}
          sx={{ 
            marginRight: 2,
            backgroundColor: "#0066cc",
            "&:hover": { backgroundColor: "#0056b3" }
          }}
        >
          Anterior
        </Button>

        <span style={{ color: "#333" }}>Página {page}</span>

        <Button
          variant="contained"
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
          sx={{ 
            marginLeft: 2,
            backgroundColor: "#0066cc",
            "&:hover": { backgroundColor: "#0056b3" }
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default ApiRyC;