import {useState} from 'react'
import contact from '../../assets/contact.png'
import './styles.css'

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'

const Contact = () => {

  const initialState={
    name:'',
    email:'',
    message:'',
  }

  const [values, setValues] = useState(initialState);

  const OnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
    if(values.name && values.email && values.message !== ''){
        await addDoc(collection(db, 'messages'), {
        values,
      });
      alert('mensaje enviado')
    }
    else{
      alert('debes completar todos los campos')
    }
	};
  
  return (
    <div className='contactBox'>
        <div>
            <img src={contact} alt='Imagen Contacto' className='contactImg'></img>
        </div>
        <div className='contactFormBox'>
            <h2 className='titleSectionAbout'>Contacto</h2>
            <form className='contactForm' onSubmit={onSubmit}>
                <input
                  onChange={OnChange}
                  type='text' 
                  name='name'
                  placeholder='Su Nombre' 
                  className='formInput'>
                 </input>
                <input
                  onChange={OnChange}
                  type='email' 
                  name='email'
                  placeholder='Su E-mail' 
                  className='formInput'>
                </input>
                <textarea
                  onChange={OnChange}
                  type='text'
                  name='message' 
                  placeholder='Su Mensaje' 
                  className='formInput' 
                  rows="5">
                </textarea>
                <button className='link'>Enviar Mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
