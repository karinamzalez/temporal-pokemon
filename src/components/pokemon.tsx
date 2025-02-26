// IMPORTS -----------------------------------
import React, { JSX, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonType } from '@/types';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';
import { useInput } from '@/hooks/useInput';
import useSWR from 'swr';
import { fetcher } from '@/api';

// TYPES -------------------------------------

// COMPONENT ---------------------------------
const Pokemon: React.FunctionComponent = (): JSX.Element => {
  // const [pokemon, setPokemon] = useState<PokemonType[]>([{name: "pikachu"}, {name: "squirtle"}]);
  const { value: searchTerm, bind: bindSearchTerm } = useInput("");
  const { data, error, isLoading } = useSWR(`api/pokemon/search/${searchTerm}`, fetcher, {
    keepPreviousData: true
  });

  useEffect(() => {
    console.log("term", searchTerm)
    console.log("data", data)
    console.log("isLoading", isLoading)
    console.log("error", error)
  }, [data]);

  return (
    <StyledContainer> 
      <h1>Welcome to Pokemon Search! Search by keyword below:</h1>
      <SearchInput bindSearchTerm={bindSearchTerm} />
      {
        data && data.pokemon ? 
        <PokemonList
          pokemon={data.pokemon}
        /> : <div>hi</div>
      }
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