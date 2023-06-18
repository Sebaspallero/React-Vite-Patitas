import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {clearCart, deleteProduct} from '../../../../context/cartSlice'
import { useSelector } from 'react-redux'
import './styles.css'

const CartWindow = () => {

  const cart = useSelector((state) => state.cart.cart)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()

  return (
    <div className='cartViewBox'>
        <div className='cartView'>
            <h2 className='cartViewTitle'>Carrito de <span className='titleAccent'>Compras</span></h2>
            {cart.length > 0 ? 
              <div>
                {cart.map((product)=>{
                  return(
                      <div className='cartViewProduct' key={product.id}>
                          <img className='cartViewImg' src={product.image} alt={product.title}></img>
                          <div className='cartViewTextBox'>
                            <p className='cartViewText'>{product.title}</p>
                            <p className='cartViewText'>Precio: ${product.price}</p>
                            <p className='cartViewText'>Cantidad: {product.quantity}</p>
                          </div>
                          <span className='cartViewDeleteBtn' onClick={()=> dispatch(deleteProduct(product.id))}><FontAwesomeIcon icon={faXmark} /></span>
                      </div>
                      )})}
                      <p style={{marginBottom:'30px'}}>Total: ${total}</p>
                      <Link to={'/cart'} className='link'>Finalizar Compra</Link>
                      <FontAwesomeIcon onClick={()=>dispatch(clearCart())} className='cartViewDeleteAll' icon={faTrash} />
                </div>
                : <p className='cartMsgEmpty'>Tu Carrito está Vacío</p>
              }
        </div>
    </div>
  )
}

export default CartWindow