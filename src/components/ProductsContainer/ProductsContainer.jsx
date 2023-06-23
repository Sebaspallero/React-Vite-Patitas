import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ProductsList from './ProductsList/ProductsList'
import './styles.css'


const ProductsContainer = () => {
  return (
    <section id='productos' className='products-container'>
        <h2 className='section-title'>Nuestros <span className='title-accent'>Productos</span></h2>
        <div className='category-selector-box'>
            {/* HACER COMPONENTE DE BOTON QUE SEA UN BUTTON Y ARREGLAR BOTONES DE FOOTER */}
            <Link to='/' className='link btn-mrg text'>TODO</Link>
            <Link to='/categoria/perro' className='link btn-mrg text'>PERROS <FontAwesomeIcon  icon={faDog}/></Link>
            <Link to='/categoria/gato' className='link btn-mrg text'>GATOS <FontAwesomeIcon  icon={faCat}/></Link>
        </div>
        <ProductsList/>
    </section>
  )
}

export default ProductsContainer