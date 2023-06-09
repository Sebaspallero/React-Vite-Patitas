import './styles.css'

const Product = ({data}) => {
  return (
    <div className='itemBox'>
        <div className='ItemImgBox'>
          <img className='itemImg' src={data.img_url} alt='Imagen de Producto'></img>
        </div>
        <h3 className='itemTitle'>{data.title}</h3>
        <p className='itemPrice'>$ {data.price.toLocaleString()}</p>
    </div>
  )
}

export default Product