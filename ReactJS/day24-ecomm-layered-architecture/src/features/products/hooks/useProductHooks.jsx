import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getallProductAPI,
  getProductByCategoryAPI,
  getProductCategoriesAPI,
  getSearchProductAPI,
} from "../api/productApi";

export const useAllProducts = (searchTerm = "") => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(null);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  let { data, isLoading, error } = useQuery({
    queryKey: ["products", debouncedSearchTerm],
    queryFn: () =>
      debouncedSearchTerm?.trim()
        ? getSearchProductAPI(debouncedSearchTerm.trim())
        : getallProductAPI(),
  });

  console.log("Products data: ", data);

  return { data, isLoading, error };
};

export const useAllCategories = () => {
  let { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategoriesAPI,
  });

  console.log("Product categories data: ", data);

  return { data, isLoading, error };
};

export const useProductsByCategory = (category) => {
  let { data, isLoading, error } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductByCategoryAPI(category),
    enabled: !!category && category !== "all",
  });
  console.log(`Products by category (${category}) data: `, data);

  return { data, isLoading, error };
};
