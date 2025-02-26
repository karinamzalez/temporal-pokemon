"use client"
import styled from 'styled-components';
import Pokemon from '@/components/Pokemon';

export default function Home() {
  return (
    <>
      <Header>Pokemon Search</Header>
      <Pokemon />
    </>
  );
}


// STYLING
const Header = styled.header`
  background-color: #CC0000;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  font-size: calc(15px + 2vmin);
  font-weight: bold;
  padding-left: 5vw;
  color: #FFCB05;
  -webkit-text-stroke: 1px #3D7DCA;
`;
