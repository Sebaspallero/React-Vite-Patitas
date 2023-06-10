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
        },
        isInCart: (state, action) => {
            state.cart.find((product) => product.id === action.payload) ? true : false
        },
        deleteProduct: (state, action) => {
            const deletedProduct = state.cart.filter((product) => product.id !== action.payload)
            state.cart = deletedProduct
        },
        addProduct: (state, action) => {
            const newProduct = action.payload.product
            const newQuantity = action.payload.quantity
            const updatedCart = state.cart.filter(product => product.id !== newProduct.id);
            updatedCart.push({...newProduct, quantity: newQuantity});
            state.cart = updatedCart
            console.log(action.payload.quantity)
        },
        /* totalPrice: (state, action) => {
            const newTotal = products.reduce((total,item)=>total+(item.quantity*item.price),0)
            setTotal(newTotal)
            return(total)
         } */
    }
})

export const {clearCart, isInCart, deleteProduct, addProduct} = cartSlice.actions
export default cartSlice.reducer