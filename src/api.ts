import axios from "axios";

const api = axios.create({
  baseURL: "https://meowing-bristle-alamosaurus.glitch.me/",
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
