import { capitalized } from '../../../shared/utils/capitalized'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faHeart, faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import { useCounter } from '../ProductDetail/hooks/useCounter'
import './styles.css'

const Product = ({data}) => {

  const {addOneQuantity} = useCounter()

  return (
    <div className='itemBox'>
        <div className='ItemImgBox'>
          <Link to={`/item/${data.id}`}>
            <img className='itemImg' src={data.image} alt={data.title}></img>
          </Link>
        </div>
        <div className='overlay'>
            <button className='overlay-btn'><FontAwesomeIcon icon={faHeart}/></button>
            <button className='overlay-btn' onClick={()=> addOneQuantity(data)}><FontAwesomeIcon icon={faCartShopping}/></button>
            <Link to={`/item/${data.id}`} className='overlay-btn'><FontAwesomeIcon icon={faSearch}/></Link>
        </div>
        <h3 className='itemTitle'>{data.title}</h3>
        <p className='itemCategory'>Categoria {capitalized(data.category)}</p>
        <p className='itemPrice'>${data.price}</p>
    </div>
  )
}

export default Product