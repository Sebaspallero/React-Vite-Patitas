import FormInput from '../../../shared/components/FormInput/FormInput';
import { cartInputs } from '../../../shared/utils/inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { useSubmitCart } from './hooks/useSubmitCart';
import { Link } from 'react-router-dom';
import './styles.css'


const CartForm = () => {

  const inputs = cartInputs
  const {handleOnChange, handleSubmit, preference} = useSubmitCart()


  return (
    <div className='checkOutBox'>
        <h1 className='titleSection'>Carrito de <span className='titleAccent'>Compras</span></h1>
        <form className='checkOutForm'>
          <div className='shipping-section'>
            <h2 className='checkOutTittle'>Información de <span className='checkOutTittleAccent'>Envío</span></h2>
            <div className='form-flex'>
              {
                inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    onChange={handleOnChange} 
                    className={'checkOutInput'}
                  />
                ))
              }
            </div>
          </div>
          <div className='payment-section'>
            <h2 className='checkOutTittle'>Información de <span className='checkOutTittleAccent'>Pago</span></h2>
            <div className='radio-box'>
                <label className='radio-input-box' htmlFor="cash">
                  <input type="radio" id="cash" name="fav_language" value="cash" className='radio-input' defaultChecked/>
                  <div className='input-icon-box'><FontAwesomeIcon icon={faMoneyBill} className='input-icon'/></div>
                  Mercado Pago
                </label>
            </div>
            <div className='btnsCheckOutBox'>
              {preference ? <button className='link buy-btn' type='submit' onClick={handleSubmit}>Confirmar Compra</button> : <button className='link buy-btn'>Confirmar Compra</button>}
            </div>
          </div>
        </form>
        <Link to={'/'} className='backBtn'><FontAwesomeIcon icon={faArrowLeft}/> Home</Link>     
    </div>
  )
}

export default CartForm