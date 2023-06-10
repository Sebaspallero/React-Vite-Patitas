import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            state.cart = []
            state.total = 0
        },
        isInCart: (state, action) => {
            state.cart.find((product) => product.id === action.payload) ? true : false
        },
        deleteProduct: (state, action) => {
            const newCart = state.cart.filter((product) => product.id !== action.payload)
            const newTotal = newCart.reduce((total, product)=> total + (product.quantity * product.price), 0)
            state.cart = newCart
            state.total = newTotal
        },
        addProduct: (state, action) => {
            const newProduct = action.payload.product
            const newQuantity = action.payload.quantity
            const newCart = state.cart.filter(product => product.id !== newProduct.id);
            newCart.push({...newProduct, quantity: newQuantity});
            const newTotal = newCart.reduce((total, product)=> total + (product.quantity * product.price), 0)
            state.cart = newCart
            state.total = newTotal
        }
    }
})

export const {clearCart, isInCart, deleteProduct, addProduct} = cartSlice.actions
export default cartSlice.reducer