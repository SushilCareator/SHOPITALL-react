import axios from "axios";
import constants from "../constants";
import { ProductResponseType, ProductType } from "../types";

const getProducts = (
    minPrice: any,
    maxPrice: any,
    searchData: any,
    sortName: any,
    sortPrice: any
) => {
    const url = `${constants.BASE_URL}/product?minPrice=${minPrice}&maxPrice=${maxPrice}&searchData=${searchData}&sortName=${sortName}&sortPrice=${sortPrice}`;
    return axios.get(url);
};

const getProductById = (id: string) => {
    const url = `${constants.BASE_URL}/product/${id}`;
    return axios.get(url);
};

export default { getProducts, getProductById };
