// IMPORTS -----------------------------------
import React, { JSX, useEffect } from 'react';
import styled from 'styled-components';
// import { PokemonType } from '@/types';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';
import { useInput } from '@/hooks/useInput';
import useSWR from 'swr';
import { fetcher } from '@/api';

// TYPES -------------------------------------

// COMPONENT ---------------------------------
const Pokemon: React.FunctionComponent = (): JSX.Element => {
  const { value: searchTerm, bind: bindSearchTerm } = useInput("");
  const { data, error, isLoading } = useSWR(`api/pokemon/search/${searchTerm}`, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false
  });

  return (
    <StyledContainer> 
      <h1>Welcome to Pokemon Search! Search by keyword below:</h1>
      <SearchInput bindSearchTerm={bindSearchTerm} />
      {
        data ? 
        <PokemonList
          error={error}
          loading={isLoading}
          pokemon={data.pokemon}
        /> : 
        <h3>Unrequested</h3>
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