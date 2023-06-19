import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { useSubmitCart } from '../CartForm/hooks/useSubmitCart'
import { deleteProduct } from '../../../context/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './styles.css'

const OrderSummary = () => {

  const {total} = useSubmitCart()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const shipping = 800

  return (
    <div className='order-summary-box'>
      <div className='order-summary-header'>
        <h2 className='order-summary-title'>Tu <span>Orden</span></h2>
        <div className='ball-divider'></div>
        <p className='checkOutQuantity'>Productos {cart.length}</p>
      </div>
    <div className='divider'></div>
    <div className='cart-products'>
    {cart.map((product)=>{
      return(
          <div className='cartProduct' key={product.id}>
            <img className='cartImg' src={product.image} alt={product.title}></img>
            <div className='cart-product-info'>
              <p className='cart-product-title'>{product.title}</p>
              <span className='cart-product-price-box'>
                <p className='cart-product-price'>$ {product.price}</p>
                <FontAwesomeIcon icon={faXmark} className='quantity-icon'/>
                <p className='cart-product-quantity'>{product.quantity}</p>
              </span>
            </div>
            <span className='cartDeleteBtn' onClick={()=> dispatch(deleteProduct(product.id))}><FontAwesomeIcon icon={faXmark} /></span>
            <div className='divider'></div> 
          </div>
        )})}
    </div>
    <div>
        <span className='fees-box'>
          <p>Productos</p>
          <p>${total}</p>
        </span>
        <span className='fees-box'>
          <p>Envio</p>
          <p>${shipping}</p>
        </span>
        <div className='divider'></div> 
          <p className='cartTotal'>Total: ${total + shipping}</p>
        </div>
    </div>
  )
}

export default OrderSummary