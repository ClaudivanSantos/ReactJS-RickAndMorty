import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header";
import { apiCharacter } from "../services/api";
import { Loader } from "../utils/Loader";

export interface ICharacters {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export const Character = () => {
  const matches = useMediaQuery("(min-width:700px)");
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  async function getCharacters() {
    setIsLoading(true);
    const response = await apiCharacter.get(`${id}`);
    if (response) {
      setCharacters([response.data]);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader Circular />
      ) : (
        <>
          <Header />
          {characters.map((character) => (
            <Box
              display={matches ? "flex" : ""}
              sx={{
                textAlign: "center",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                key={character.id}
                component="img"
                sx={{
                  height: matches ? 350 : 200,
                  borderRadius: "0.4rem",
                  margin: "7px",
                  cursor: "pointer",
                }}
                src={character.image}
              />

              <Box
                sx={{
                  background: "#6E22B5",
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                <Typography variant="h3">{character.name}</Typography>
                <Typography>ID: {character.id}</Typography>
                <Typography
                  color={character.status == "Alive" ? "success" : "error"}
                >
                  status: {character.status}
                </Typography>
                <Typography>Gender: {character.gender}</Typography>
                <Typography>Location: {character.location.name}</Typography>
                <Typography>Origin: {character.origin.name}</Typography>
                <Typography>Species: {character.species}</Typography>
              </Box>
            </Box>
          ))}
          <Box sx={{ textAlign: "center", marginTop: "50px" }}>
            <Link style={{ textDecoration: "none" }} to={`/`}>
              <Button
                sx={{ backgroundColor: "#6E22B5", marginBottom: "20px" }}
                variant="contained"
              >
                Voltar
              </Button>
            </Link>
          </Box>
        </>
      )}
    </>
  );
};
