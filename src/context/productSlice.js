import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: []
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsOnContext: (state, action) => {
            const products = action.payload;
            state.productsList = products
        },
        getProductByid: (state, action) => {
            const product = state.productsList.find((product) => product.id == action.payload)
            state.productsList = product
        }
    }
})

export const {setProductsOnContext, getProductByid} = productSlice.actions
export default productSlice.reducer