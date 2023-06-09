import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: []
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsOnContext: (state, action) =>{
            const products = action.payload;
            state.productsList = products
        }
    }
})

export const {setProductsOnContext} = productSlice.actions
export default productSlice.reducer