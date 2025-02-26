// IMPORTS -----------------------------------
import React, { JSX } from 'react';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { PokemonType } from '@/types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CircularProgress from "@mui/material/CircularProgress";


// TYPES -------------------------------------
interface PokemonListProps {
  pokemon: PokemonType[],
  error: {"error": string},
  loading: boolean
}

// COMPONENT ---------------------------------
const PokemonList: React.FunctionComponent<PokemonListProps> = ({ pokemon, error, loading }): JSX.Element => {
  if (error) return <Alert severity="error">No matching results found.</Alert>
  if (loading) return <CircularProgress />
  return (
    <StyledBox>
      {pokemon.map((pokemon, id) => (
        <Card key={id}>
          <CardContent>
              <Typography variant="h5" component="div">
                {pokemon.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pokemon.classification || "ipsum lorem"}
              </Typography>
          </CardContent>
        </Card>
      ))}
    </StyledBox>
  )
};

// STYLING (alphabetized) ---------------------

const StyledBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2vw;
`;

export default PokemonList;