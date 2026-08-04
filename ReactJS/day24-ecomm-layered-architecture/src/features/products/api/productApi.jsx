import { api } from "../../../config/api";

export const getallProductAPI = async () => {
  try {
    let res = await api.get("/products?limit=100");
    return res.data;
  } catch (error) {
    console.log(`error in getting all products ${error}`);
    throw error;
  }
};

export const getSearchProductAPI = async (searchTerm) => {
  try {
    let res = await api.get("/products/search", {
      params: { q: searchTerm },
    });
    return res.data;
  } catch (error) {
    console.log(`error in searching products ${error}`);
    throw error;
  }
};

export const getProductCategoriesAPI = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log(`error in getting product categories ${error}`);
    throw error;
  }
};

export const getProductByCategoryAPI = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log(`error in getting products by category ${error}`);
    throw error;
  }
};
