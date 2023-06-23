import { useSelector } from 'react-redux'
import CartForm from './CartForm/CartForm'
import { Link } from 'react-router-dom'
import OrderSummary from './OrderSummary/OrderSummary'
import './styles.css'

const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)

  return (
    <div className='cartBox'>
        {cart.length > 0 ? 
        <div className='cartFormFlex'>
          <CartForm/>
          <OrderSummary/>
        </div>
           : 
        <div className='emptyCartBox'>
          <p className='cartTextEmpty'>Tu Carrito está Vacío</p>
          <Link to={'/'} className='link'>Comprar Productos</Link>
        </div>}
    </div>
  )
}

export default Cart