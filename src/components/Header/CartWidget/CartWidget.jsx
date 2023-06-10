import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { UseHandleCart } from './hooks/useHandleCart'
import CartWindow from './CartWindow/CartWindow'
import './styles.css'


const CartWidget = () => {
    
const cart = useSelector((state) => state.cart.cart)
const {handleCart, cartView} = UseHandleCart()

  return (
    <>
    <div onClick={handleCart}><FontAwesomeIcon className='cartIcon' icon={faShoppingCart} />
        {cart.length > 0 ? <span className='cartLengthIcon'>{cart.length}</span> : null}
    </div>
    {cartView ? <CartWindow cartView={cartView}/> : null}
    </>
  )
}

export default CartWidget