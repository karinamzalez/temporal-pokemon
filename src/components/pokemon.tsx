// IMPORTS -----------------------------------
import React, { useState } from 'react';
import styled from 'styled-components';

// TYPES -------------------------------------
interface Pokemon {
  name: string;
}

// COMPONENT ---------------------------------
export default function Pokemon() {
  const [pokemon, addPokemon] = useState<Pokemon[]>([{name: "pikachu"}, {name: "squirtle"}]);

  return (
    <Body> 
      <>
        <p>Welcome to Pokemon Search! Search by any name below:</p>
        <input></input>
        <Grid>
          {pokemon.map((pokemon, id) => (
            <li key={id}>{pokemon.name}</li>
          ))}
        </Grid>
      </>
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

const Grid = styled.div`
  width: 80%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2vw;
`;