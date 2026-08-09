import axios from "axios";

export const getAllProducts = async (page) => {
  try {
    let res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page * 10}`  );
    return res.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
