import React, { JSX, useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import Alert from '@mui/material/Alert';
import SearchInput from '@/components/SearchInput';
import PokemonList from '@/components/PokemonList';
// const PokemonList = lazy(() => import('@/components/PokemonList'));

import { useInput } from '@/hooks/useInput';
import { PokemonType } from '@/types';
import { axiosFetchPokemon, fetcher } from '@/api';

// COMPONENT ---------------------------------
const Pokemon: React.FunctionComponent = (): JSX.Element => {
  const [secondPage, setSecondPage] = useState<PokemonType[]>([])
  const { value: searchTerm, bind: bindSearchTerm } = useInput("");

  const { data, error, isLoading } = useSWR(searchTerm ? `/${searchTerm}` : null, fetcher, {
    keepPreviousData: true,
  });

  useEffect(() => {
    // MAKE SECOND CALL IF NEXT PAGE TOKEN IS PRESENT
    if (searchTerm && !error && isLoading==false && data && data.nextPage) {
      const getSecondPagePokemon = async () => {
        const pokemon = await axiosFetchPokemon(searchTerm, data.nextPage)
        setSecondPage(pokemon)
      }
      getSecondPagePokemon()
    } else {
      setSecondPage([])
    }
  }, [searchTerm, data, error, isLoading])
  
  return (
    <StyledContainer> 
      <h1>Welcome to Pokemon Search!</h1>
      <SearchInput bindSearchTerm={bindSearchTerm} />
      {
        !!searchTerm && data ? 
        <PokemonList
          error={error}
          loading={isLoading}
          pokemon={[...data.pokemon, ...secondPage]}
        /> : 
        <Alert severity="warning">Unrequested</Alert>
      }
    </StyledContainer>
  )
};

// STYLING ---------------------
const StyledContainer = styled.main`
  justify-content: center;
  margin: 5vh 5vw;

  h1 {
    font-size: calc(15px + 2vmin);
  }
`;

// memoize this component to avoid unnecessary re-renders
export default memo(Pokemon);