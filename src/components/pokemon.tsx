// IMPORTS -----------------------------------
import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import { PokemonType } from '@/types';
import PokemonList from '@/components/pokemonList';

// TYPES -------------------------------------

// COMPONENT ---------------------------------
const Pokemon: React.FunctionComponent = (): JSX.Element => {
  const [pokemon, addPokemon] = useState<PokemonType[]>([{name: "pikachu"}, {name: "squirtle"}]);

  return (
    <Body> 
      <p>Welcome to Pokemon Search! Search by any name below:</p>
      <input></input>
      <PokemonList pokemon={pokemon} />
    </Body>
  )
};

// STYLING (alphabetized) ---------------------

const Body = styled.div`
  justify-content: center;
  margin: 5vh 5vw;

  h1 {
    font-size: calc(15px + 2vmin);
  }
`;

export default Pokemon;