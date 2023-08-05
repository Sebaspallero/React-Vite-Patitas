import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../../../firebase/firebase'
import { clearCart } from "../../../../context/cartSlice"
import {useNavigate} from 'react-router-dom';
import axios from "axios"

export const useSubmitCart = () =>{
    
    const cart = useSelector((state) => state.cart.cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})))
    const total = useSelector((state) => state.cart.total)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const url = 'https://api.mercadopago.com/checkout/preferences';
    const TEST_ACCESS_TOKEN= process.env.TEST_ACCESS_TOKEN
    const [preference, setPreference] = useState(null)

    const products = cart.map(product => ({
      id: product.id,
      title: product.title,
      unit_price: product.price,
      quantity: product.quantity
    }))

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPhoneRegex = /^[0-9]{5,20}$/
    const validNameRegex = /^[A-Za-z]{2,16}$/

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
    if(values.name.match(validNameRegex) && values.email.match(validEmailRegex) && values.phone.match(validPhoneRegex)){
      await addDoc(collection(db, 'purchases'), {
        values,
      });
      window.location.replace(preference);
        navigate('/')
        dispatch(clearCart())
    }
    else{
      console.log("Invalid Form")
    }
	};

  async function crearPreferencia() {
    try {
      const response = await axios.post(url, {
        items: products,
      }, {
        headers: {
          Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
        },
      });
      console.log(response.data.init_point)
      setPreference(response.data.init_point)
    } catch (error) {
      console.error('Error al crear la preferencia:', error.message);
    }
  }

  useEffect(()=>{
    crearPreferencia()
  }, [])

    return{
        cart,
        total,
        preference,
        handleOnChange,
        handleSubmit,
        emptyCart
    }
}