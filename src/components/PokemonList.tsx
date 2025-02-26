import React, { JSX } from 'react';

import { orderBy } from 'lodash';
import styled from 'styled-components';

import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from "@mui/material/CircularProgress";
import Typography from '@mui/material/Typography';

import { PokemonType } from '@/types';

// TYPES -------------------------------------
interface PokemonListProps {
  pokemon: PokemonType[],
  error: {"error": string},
  loading: boolean
}

// COMPONENT ---------------------------------
const PokemonList: React.FunctionComponent<PokemonListProps> = ({ pokemon, error, loading }): JSX.Element => {
  const alphabetizedPokemon = orderBy(pokemon, ['name'], ['asc'])

  if (error) return <Alert severity="error">No matching results found.</Alert>
  if (loading) return <CircularProgress />
  return (
    <StyledBox>
      {alphabetizedPokemon.map((pokemon: PokemonType, id: number) => (
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

// STYLING ---------------------
const StyledBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2vw;
`;

export default PokemonList;
