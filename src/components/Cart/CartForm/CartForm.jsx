import FormInput from '../../../shared/components/FormInput/FormInput';
import { cartInputs } from '../../../shared/utils/inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMoneyBill, faCreditCard, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { useSubmitCart } from './hooks/useSubmitCart';
import { Link } from 'react-router-dom';
import './styles.css'


const CartForm = () => {

  const inputs = cartInputs
  const {handleOnChange, handleSubmit} = useSubmitCart()

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
                <input type="radio" id="cash" name="fav_language" value="cash" className='radio-input'/>
                <div className='input-icon-box'><FontAwesomeIcon icon={faMoneyBill} className='input-icon'/></div>
                Efectivo
              </label>
              <label className='radio-input-box' htmlFor="card">
                <input type="radio" id="card" name="fav_language" value="cash" className='radio-input'/>
                <div className='input-icon-box'><FontAwesomeIcon icon={faCreditCard} className='input-icon'/></div>
                Tarjeta
              </label>
              <label className='radio-input-box' htmlFor="apple">
                <input type="radio" id="apple" name="fav_language" value="cash" className='radio-input'/>
                <div className='input-icon-box'><FontAwesomeIcon icon={faGlobe} className='input-icon'/></div>
                Home Banking
              </label>
            </div>
            <div className='btnsCheckOutBox'>
                <button type='submit' className='link' onClick={handleSubmit}>Confirmar Compra</button>
            </div>
          </div>
        </form>
        <Link to={'/'} className='backBtn'><FontAwesomeIcon icon={faArrowLeft}/> Home</Link>
    </div>
  )
}

export default CartForm