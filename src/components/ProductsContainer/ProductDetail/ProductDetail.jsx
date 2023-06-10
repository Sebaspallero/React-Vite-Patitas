import { useFetch } from './hooks/useFetch'
import { useCounter } from './hooks/useCounter'
import { Link } from 'react-router-dom'
import "./styles.css"



const ProductDetail = () => {

const {product} = useFetch()
const {add, addQuantity, substract, goToCart, quantity} = useCounter()

  return (
    <div className='itemDetailBox'>
        <img src={product.image} className='itemDetailImg' alt="Imagen de producto"></img>
        <div className='ItemDetailTextBox'>
            <h2 className='itemDetailTitle'>{product.title}</h2>
            <p className='itemDetailPrice'>${product?.price?.toLocaleString() || ''}</p>
            <p className='ietmDetailDescription'>{product.description}</p>
            {
                goToCart ? <Link to='/cart' className='link'>Finalizar Compra</Link> : null
            }
            <div className='counterBox'>
                <div className='itemCounter'>
                    <button className='btnsAdd' onClick={substract}>-</button>
                    <div>{quantity}</div>   
                    <button className='btnsAdd' onClick={add}>+</button>
                </div>
                <button onClick={() => addQuantity(quantity, product)} className='btn'>Agregar al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail