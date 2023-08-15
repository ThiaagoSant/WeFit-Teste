import { Product } from "../types";
import { api } from "./index";

export type GetMoviesResponse = Product[];

export const productsApi = {
  getAllMovies: () => api.get<GetMoviesResponse>("/products"),
};
