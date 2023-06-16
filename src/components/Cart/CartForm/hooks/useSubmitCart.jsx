import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../../../firebase/firebase'
import { clearCart } from "../../../../context/cartSlice"
import {useNavigate} from 'react-router-dom';

export const useSubmitCart = () =>{
    
    const cart = useSelector((state) => state.cart.cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})))
    const total = useSelector((state) => state.cart.total)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const emptyCart = () =>{
        dispatch(clearCart())
    }
    
    const initialState = {
        name:'',
        email:'',
        phone:'',
        products: cart,
        date: Date(),
        total: total
      }

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
    if(values.name && values.email && values.phone !== ''){
      await addDoc(collection(db, 'purchases'), {
        values,
      });
      alert('tu compra ha sido realizada')
      navigate('/')
      dispatch(clearCart())
    }
    else{
      alert('Todos los campos deben ser completados')
    }
	};

    return{
        cart,
        total,
        handleOnChange,
        handleSubmit,
        emptyCart
    }
    
}