// IMPORTS -----------------------------------
import React, { JSX } from 'react';
import styled from 'styled-components';
import { PokemonType } from '@/types';
import CircularProgress from "@mui/material/CircularProgress";

// TYPES -------------------------------------
interface PokemonListProps {
  pokemon: PokemonType[],
  error: {"error": string},
  loading: boolean
}

// COMPONENT ---------------------------------
const PokemonList: React.FunctionComponent<PokemonListProps> = ({ pokemon, error, loading }): JSX.Element => {
  if (error) return <h3>Failed to load</h3>
  if (loading) return <CircularProgress />
  return (
    <Grid>
      {pokemon.map((pokemon, id) => (
        <li key={id}>{pokemon.name}</li>
      ))}
    </Grid>
  )
};

// STYLING (alphabetized) ---------------------

const Grid = styled.div`
  width: 80%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2vw;
`;

export default PokemonList;