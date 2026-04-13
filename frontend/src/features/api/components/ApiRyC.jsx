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
    backgroundColor: "#0d0d0d", 
    padding: "20px",
    paddingTop: "1px"
    }}>
      
      {/* TÍTULO */}
        <h1 style={{ 
        color: "#ff2e2e", 
        textAlign: "center",
        marginTop: "0",
        marginBottom: "30px"
        }}>
        Rick and Morty API
        </h1>

      {/* GRID DE PERSONAJES */}
      <Grid container spacing={3}>
        {characters?.map((char) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
            <Card 
              sx={{ 
                borderRadius: 3, 
                boxShadow: 5, 
                backgroundColor: "#1a1a1a",
                color: "white",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 15px #ff2e2e"
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
                <Typography variant="h6" sx={{ color: "white" }}>
                  {char.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
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
            backgroundColor: "#ff2e2e",
            "&:hover": { backgroundColor: "#cc0000" }
          }}
        >
          Anterior
        </Button>

        <span style={{ color: "white" }}>Página {page}</span>

        <Button
          variant="contained"
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
          sx={{ 
            marginLeft: 2,
            backgroundColor: "#ff2e2e",
            "&:hover": { backgroundColor: "#cc0000" }
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default ApiRyC;