import { useQuery } from "@tanstack/react-query";
import { backend } from "../util/backend";

export const useFetchRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: () => {
      return backend.fetch("/recipes");
    },
  });
};
