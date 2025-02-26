export type PokemonType = {
  id: number;
  name: string;
  classification?: string;
}


export type DataType = {
  nextPage?: string;
  pokemon?: PokemonType[];
};