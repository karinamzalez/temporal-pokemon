// IMPORTS -----------------------------------
import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import { PokemonType } from '@/types';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';

// TYPES -------------------------------------

// COMPONENT ---------------------------------
const Pokemon: React.FunctionComponent = (): JSX.Element => {
  const [pokemon, addPokemon] = useState<PokemonType[]>([{name: "pikachu"}, {name: "squirtle"}]);

  return (
    <StyledContainer> 
      <h1>Welcome to Pokemon Search! Search by keyword below:</h1>
      <SearchInput />
      <PokemonList pokemon={pokemon} />
    </StyledContainer>
  )
};

// STYLING (alphabetized) ---------------------

const StyledContainer = styled.div`
  justify-content: center;
  margin: 5vh 5vw;

  h1 {
    font-size: calc(15px + 2vmin);
  }
`;

export default Pokemon;