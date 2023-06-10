import './styles.css'

const Product = ({data}) => {
  return (
    <div className='itemBox'>
        <div className='ItemImgBox'>
          <img className='itemImg' src={data.image} alt='Imagen de Producto'></img>
        </div>
        <h3 className='itemTitle'>{data.title}</h3>
        <p className='itemPrice'>${data.price}</p>
    </div>
  )
}

export default Product