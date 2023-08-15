import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";

import { productsApi, GetMoviesResponse } from "../api/routes";

type GetAllProductsOptions = UseQueryOptions<
  GetMoviesResponse,
  AxiosError,
  GetMoviesResponse
>;

export const getProductsQueryKey = "getProductsQueryKey";

const getProducts = async () => {
  const { data } = await productsApi.getAllMovies();

  return data;
};

const useGetProducts = (options?: GetAllProductsOptions): any =>
  useQuery<GetMoviesResponse, AxiosError, GetMoviesResponse>(
    getProductsQueryKey,
    getProducts,
    options
  );

export default useGetProducts;
