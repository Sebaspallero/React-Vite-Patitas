import FormInput from '../../../shared/components/FormInput/FormInput';
import { cartInputs } from '../../../shared/utils/inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { useSubmitCart } from './hooks/useSubmitCart';
import './styles.css'


const CartForm = () => {

  const inputs = cartInputs
  const {cart, total, handleOnChange, handleSubmit, emptyCart} = useSubmitCart()

  return (
    <div className='checkOutBox'>
        <h2 className='checkOutTittle'>Check <span className='checkOutTittleAccent'>Out</span></h2>
        <p className='checkOutQuantity'>Items {cart.length}</p>
        <form className='checkOutForm'>
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
            <p className='cartTotal'>Total: ${total}</p>
            <div className='btnsCheckOutBox'>
                <button type='submit' className='link' onClick={handleSubmit}>Terminar Compra</button>
                <FontAwesomeIcon onClick={emptyCart} className='cartDeleteAll' icon={faTrash}/>
            </div>
        </form>
    </div>
  )
}

export default CartForm