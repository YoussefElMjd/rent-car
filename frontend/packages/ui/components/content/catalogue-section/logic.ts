import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { getCars } from "../../../../fetchers/car";
import { useEffect } from "react";
import useCatalogueLogicsType from "./types";

export const useCatalogueLogics = (): useCatalogueLogicsType => {
  const {
    data: carData,
    error,
    isLoading,
  } = useQuery(["cars"], getCars, {
    staleTime: 60000,
  });

  return { carData };
};
