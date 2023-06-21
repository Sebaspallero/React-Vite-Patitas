import { createSlice } from "@reduxjs/toolkit";

const cartProducts = localStorage.getItem('cartProducts') !== null ? JSON.parse(localStorage.getItem('cartProducts')) : []
const total = localStorage.getItem('total') !== null ? JSON.parse(localStorage.getItem('total')) : 0

const initialState = {
    cart: cartProducts,
    total: total
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            state.cart = []
            state.total = 0

            localStorage.setItem('cartProducts', JSON.stringify(state.cart.map(item => item)))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        isInCart: (state, action) => {
            state.cart.find((product) => product.id === action.payload) ? true : false
        },
        deleteProduct: (state, action) => {
            const newCart = state.cart.filter((product) => product.id !== action.payload)
            const newTotal = newCart.reduce((total, product)=> total + (product.quantity * product.price), 0)
            state.cart = newCart
            state.total = newTotal

            localStorage.setItem('cartProducts', JSON.stringify(state.cart.map(item => item)))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        addProduct: (state, action) => {
            const newProduct = action.payload.product
            const newQuantity = action.payload.quantity
            const newCart = state.cart.filter(product => product.id !== newProduct.id);
            newCart.push({...newProduct, quantity: newQuantity});
            const newTotal = newCart.reduce((total, product)=> total + (product.quantity * product.price), 0)
            state.cart = newCart
            state.total = newTotal

            localStorage.setItem('cartProducts', JSON.stringify(state.cart.map(item => item)))
            localStorage.setItem('total', JSON.stringify(state.total))
        }
    }
})

export const {clearCart, isInCart, deleteProduct, addProduct} = cartSlice.actions
export default cartSlice.reducer