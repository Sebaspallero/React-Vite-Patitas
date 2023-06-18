import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { deleteProduct } from '../../../context/cartSlice'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './styles.css'

const OrderSummary = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)

  return (
    <div className='cartProductsBox'>
    {cart.map((product)=>{
      return(
          <div className='cartProducts' key={product.id}>
            <div className='cartProduct'>
              <img className='cartImg' src={product.image} alt={product.title}></img>
              <p className='cartText'>{product.title}</p>
              <p className='cartText'>$ {product.price}</p>
              <p className='cartText'>x {product.quantity}</p>
              <span className='cartDeleteBtn' onClick={()=>dispatch(deleteProduct(product.id))}><FontAwesomeIcon icon={faXmark} /></span>
            </div>
          </div>
        )})}
        <div>
          <Link to={'/'} className='backBtn'><FontAwesomeIcon icon={faArrowLeft}/>Volver Atrás</Link>
        </div>
    </div>
  )
}

export default OrderSummary