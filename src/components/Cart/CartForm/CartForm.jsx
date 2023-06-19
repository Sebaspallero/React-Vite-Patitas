import FormInput from '../../../shared/components/FormInput/FormInput';
import { cartInputs } from '../../../shared/utils/inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useSubmitCart } from './hooks/useSubmitCart';
import { Link } from 'react-router-dom';
import './styles.css'


const CartForm = () => {

  const inputs = cartInputs
  const {handleOnChange, handleSubmit} = useSubmitCart()

  return (
    <div className='checkOutBox'>
        <form className='checkOutForm'>
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
            <div className='btnsCheckOutBox'>
                <button type='submit' className='link' onClick={handleSubmit}>Confirmar Compra</button>
            </div>
        </form>
        <Link to={'/'} className='backBtn'><FontAwesomeIcon icon={faArrowLeft}/> Home</Link>
    </div>
  )
}

export default CartForm