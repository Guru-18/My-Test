import { createSlice } from "@reduxjs/toolkit";
import AXIOS from './../AXIOS';

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
        productDetails: {},
        success: "",
        error: ""
    },
    reducers: {
        SET_PRODUCTS(state, action) {
            state.allProducts = action.payload;
        },
        SET_PRODUCT(state, action) {
            state.productDetails = action.payload;
        },
        SET_ERROR(state, action) {
            state.error = action.payload;
        },
        SET_SUCCESS(state, action) {
            state.success = action.payload;
        }
    }
});

export const {
    SET_PRODUCTS,
    SET_ERROR,
    SET_PRODUCT,
    SET_SUCCESS } = productSlice.actions;
export default productSlice.reducer;

export function getAllProducts() {
    return async function getAllProductsThunk(dispatch, getState) {
        try {
            const { data } = await AXIOS.get("/products");
            dispatch(SET_PRODUCTS(data.products));
        }
        catch (error) {
            dispatch(SET_ERROR(error.response.data.error.message))
        }
    }
}

export function getProductDetails(id) {
    return async function getProductDetailsThunk(dispatch, getState) {
        const { data } = await AXIOS.get(`/product/${id}`);
        dispatch(SET_PRODUCT(data.product));
    }
}

export function createNewProduct(product) {
    return async function createNewProductThunk(dispatch, getState) {
        try {
            const { data } = await AXIOS.post("/product/new", product);
            dispatch(SET_SUCCESS(data.message))
        }
        catch (error) {
            dispatch(SET_ERROR(error.response.data.message))
        }
    }
}

export function deleteProduct(id) {
    return async function deleteProductThunk(dispatch, getState) {
        try {
            const { data } = await AXIOS.delete(`/product/${id}`);
            dispatch(SET_SUCCESS(data.message));
        }
        catch (error) {
            dispatch(SET_ERROR(error.response.data.error.message))
        }
    }
}

export function updateProduct(id, product) {
    return async function updateProductThunk(dispatch, getState) {
        try {
            const { data } = await AXIOS.put(`/product/${id}`, product);
            dispatch(SET_SUCCESS(data.message));
        }
        catch (error) {
            dispatch(SET_ERROR(error.response.data.error.message))
        }
    }
}

export function clearState() {
    return function clearStateThunk(dispatch) {
        dispatch(SET_SUCCESS(""))
        dispatch(SET_ERROR(""))
    }
}