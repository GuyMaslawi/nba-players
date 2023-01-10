import api from "./index";

const BASE_URL = "https://www.balldontlie.io/api/v1/players";

export const fetchPlayers = (page: number, perPage: number) =>
  api.get(`${BASE_URL}?page=${page}&per_page=${perPage}`);

export const searchPlayer = (page: number, perPage: number, value: string) =>
  api.get(`${BASE_URL}?page=${page}&per_page=${perPage}&search=${value}`);
