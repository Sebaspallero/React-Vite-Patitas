import { useFetch } from './hooks/useFetch'
import { useCounter } from './hooks/useCounter'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

const ProductDetail = () => {

const {product} = useFetch()
const {add, addQuantity, substract, quantity} = useCounter()

  return (
    <div className='itemDetailBox'>
        <img src={product.image} className='itemDetailImg' alt={product.title}></img>
        <div className='ItemDetailTextBox'>
            <h2 className='itemDetailTitle'>{product.title}</h2>
            <div className='conter-price-box'>
                <p className='itemDetailPrice'>${product?.price?.toLocaleString() || ''}</p>
                <div className='itemCounter'>
                        <button className='btn-counter' onClick={substract}>-</button>
                        <span className='quantity'>{quantity}</span>   
                        <button className='btn-counter' onClick={add}>+</button>
                </div>
            </div>
            <p className='ietmDetailDescription text'>{product.description}</p>
            <img src={product.image} className='itemDetailImg-mobile' alt={product.title}></img>
            <div className='counterBox'>
                <button onClick={() => addQuantity(quantity, product)} className='link'>Agregar al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail