import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../context/cartSlice";


export const useCounter = () =>{

    const[goToCart, setGoToCart] = useState(false);
    const[quantity , setQuantity] = useState(1);
    const dispatch = useDispatch()

    const add = () => {
        setQuantity(quantity + 1)
    };

    const substract=()=>{
        if(quantity > 1) setQuantity(quantity - 1)
    };

    const addQuantity = (quantity, product) => {
        setGoToCart(true)
        let data = {quantity: quantity, product: product}
        dispatch(addProduct(data)) 
    }

    const addOneQuantity = (product) => {
        setQuantity(quantity +1)
        let data = {quantity, product: product}
        dispatch(addProduct(data))
    }

      return{
        quantity,
        add,
        substract,
        addQuantity,
        addOneQuantity,
        goToCart
      }
}