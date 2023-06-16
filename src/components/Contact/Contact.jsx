import contact from '../../assets/contact.png'
import FormInput from '../../shared/components/FormInput/FormInput'
import { contactInputs } from '../../shared/utils/inputs'
import { useSubmit } from './hooks/useSubmit'
import './styles.css'

const Contact = () => {

  const inputs = contactInputs
  const {onChange, handleSubmit} = useSubmit()
  
  return (
    <div className='contactBox'>
        <div>
            <img src={contact} alt='Imagen Contacto' className='contactImg'></img>
        </div>
        <div className='contactFormBox'>
            <h2 className='titleSectionAbout'>Contacto</h2>
            <form className='contactForm'>
              {
                inputs.map((input) => (
                  <FormInput key={input.id} {...input}  onChange={onChange} className={'contactInput'}  />
                ))
              }
                <textarea
                  onChange={onChange}
                  type='text'
                  name='message' 
                  placeholder='Su Mensaje' 
                  className='formInput' 
                  rows="5">
                </textarea>
                <button className='link' onClick={handleSubmit}>Enviar Mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
