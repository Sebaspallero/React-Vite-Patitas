import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './CheckOut.css'


// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'


const CheckOut = () => {

  const navigate = useNavigate();
  const {cart,totalPrice,clearCart} = useCartContext(); 

  const initialState={
    name:'',
    email:'',
    phone:'',
    items: cart.map(product=>({id:product.id,title:product.title,price:product.price,quantity:product.quantity})),
    date: Date(),
    total: totalPrice(cart).toLocaleString()
  }



  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
    if(values.name && values.email && values.phone !== ''){
      const docRef = await addDoc(collection(db, 'purchases'), {
        values,
      });
      setValues(initialState);
      setTimeout(()=>{
        Swal.fire({
          title: 'Tu compra ha sido realizada!',
          text: `Esté es tu código de compra: ${docRef.id}`,
          icon: 'success',
          confirmButtonColor:'#e67e22',
          confirmButtonText: 'Volver al Inicio',
          allowOutsideClick:false,
          customClass:{
              title: 'alertTitle',
              text:'alertText',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            clearCart();
            navigate('/')
          }
        })
      },2000);
    }
    else{
      Swal.fire({ 
        position: 'bottom-start',
        icon: 'warning',
        text: 'Debes completar todos los campos',
        showConfirmButton: false,
        allowOutsideClick:true,
        backdrop:true,
        timer: 2000,
        customClass:{
            title: 'alertTitle',
        }
      })
    }
	};


  return (
    <div className='checkOutBox'>
        <h2 className='checkOutTittle'>Check <span className='checkOutTittleAccent'>Out</span></h2>
        <p className='checkOutQuantity'>Items {cart.length}</p>
        <form className='checkOutForm' onSubmit={onSubmit}>
            <input 
              onChange={handleOnChange}
              type='text' 
              name='name'
              placeholder='Su Nombre' 
              className='checkOutInput'>
            </input>
            <input 
              onChange={handleOnChange}
              type='email' 
              name='email' 
              placeholder='Su E-mail' 
              className='checkOutInput'>
            </input>
            <input 
              onChange={handleOnChange}
              type="number" 
              name='phone'
              placeholder='Su Teléfono' 
              className='checkOutInput'>
            </input>
            <p className='cartTotal'>Total: ${totalPrice(cart).toLocaleString()}</p>
            <div className='btnsCheckOutBox'>
                <button type='submit' className='btn'>Terminar Compra</button>
                <FontAwesomeIcon onClick={()=>clearCart()} className='cartDeleteAll' icon={faTrash}/>
            </div>
        </form>
    </div>
    
  )
}

export default CheckOut