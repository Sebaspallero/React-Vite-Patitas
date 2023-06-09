import { useFetchProducts } from './hooks/useFetchProducts'
import { Link } from 'react-router-dom'
import Spinner from '../../../shared/components/Spinner/Spinner'
import Product from '../Product/Product'
import './styles.css'

const ProductsList = () => {

const {products, loading} = useFetchProducts()

  return (
    <>
    {loading ? <Spinner/> : 
    <div className='productsBox'>
        {products.map((product)=>{
          return(
          <div key={product.id}>
            {/* <Link to={`/item/${product.id}`}>
              <Product data={product}/>
            </Link> */}  
            <p>{product.description}</p>
          </div>)  
        })}
      </div>}
    </>
  )
}

export default ProductsList