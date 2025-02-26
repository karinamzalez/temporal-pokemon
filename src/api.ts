import axios from "axios";
// import { debounce } from "lodash"

export const url = "https://meowing-bristle-alamosaurus.glitch.me/api/pokemon/search";

const api = axios.create({
  baseURL: url
});

// export const debouncedFetcher = debounce(
//   (url: string) => api.get(url).then((res) => res.data),
//   500
// );

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export async function axiosFetchPokemon(searchTerm: string, page: string) {
  try {
    const response = await axios.get(`${url}/${searchTerm}?page=${page}`)
    return response.data.pokemon
  } catch (e) {
    console.log(e, "nextPage request failed") /*TODO: add better error handling here*/
  }
}
