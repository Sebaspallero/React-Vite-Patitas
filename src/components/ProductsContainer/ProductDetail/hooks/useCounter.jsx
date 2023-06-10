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
        dispatch(addProduct([{quantity, product}])) 
    }

      return{
        quantity,
        add,
        substract,
        addQuantity,
        goToCart
      }
}