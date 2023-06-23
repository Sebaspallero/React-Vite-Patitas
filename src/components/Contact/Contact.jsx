import contact from '../../assets/contact.png'
import FormInput from '../../shared/components/FormInput/FormInput'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { contactInputs } from '../../shared/utils/inputs'
import { useSubmit } from './hooks/useSubmit'

import './styles.css'

const Contact = () => {

  const inputs = contactInputs
  const {onChange, handleSubmit, open, handleClose, succes} = useSubmit()
  
  return (
    <section className='contactBox' id='contacto'>
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
              <div className='msg-box'>
              <textarea
                  id='textarea'
                  onChange={onChange}
                  type='text'
                  name='message' 
                  placeholder=' ' 
                  className='msg-input' 
                  rows="3">
              </textarea>
              <label className="msg-label" htmlFor='textarea'>Su Mensaje</label>
              </div>
              <button className='link' onClick={handleSubmit}>Enviar Mensaje</button>
                {succes ?
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
                <MuiAlert icon={false} sx={{ 
                   backgroundColor: '#130f40', 
                   border:'2px solid eee', 
                   boxShadow: '0 .5rem 1.5rem rgba(0,0,0,.1)',
                   color: 'white' }}>
                   Mensaje Enviado!
                </MuiAlert>
                </Snackbar>
                :
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
                  <MuiAlert icon={false} sx={{ 
                    backgroundColor: '#e67e22', 
                    border:'2px solid eee', 
                    boxShadow: '0 .5rem 1.5rem rgba(0,0,0,.1)',
                    color: 'white' }}>
                    Revise todos los campos
                  </MuiAlert>
                </Snackbar>}
            </form>
        </div>
    </section>
  )
}

export default Contact
