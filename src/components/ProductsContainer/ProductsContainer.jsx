import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ProductsList from './ProductsList/ProductsList'
import './styles.css'


const ProductsContainer = () => {
  return (
    <section id='productos' className='products-container'>
        <h2 className='section-title'>Nuestros <span className='title-accent'>Productos</span></h2>
        <div className='category-selector-box'>
            <Link to='/' className='link'>TODO</Link>
            <Link to='/categoria/perro' className='link'>PERROS <FontAwesomeIcon  icon={faDog}/></Link>
            <Link to='/categoria/gato' className='link'>GATOS <FontAwesomeIcon  icon={faCat}/></Link>
        </div>
        <ProductsList/>
    </section>
  )
}

export default ProductsContainer