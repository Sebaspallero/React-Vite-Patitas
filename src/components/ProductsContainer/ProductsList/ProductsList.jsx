import { useFetchProducts } from './hooks/useFetchProducts'
import Spinner from '../../../shared/components/Spinner/Spinner'
import Product from '../Product/Product'
import './styles.css'

const ProductsList = () => {

const {products, loading, error} = useFetchProducts()

  return (
    <>
    {loading ? <Spinner/> : 
    <div className='products-box'>
    {products.map((product)=>{
      return(
      <div key={product.id}>
        {/* ARREGLAR CATEGORIA DE GATOS */}
          <Product data={product}/>
      </div>)  
    })}
    </div>}
    {/* CREAR COMPONENTE DE ERROR */}
    {error && <span>Ha ocurrido un error: {error}</span>}
    </>
  )
}

export default ProductsList