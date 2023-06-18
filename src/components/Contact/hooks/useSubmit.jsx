import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../../firebase/firebase'

export const useSubmit = () =>{

    const initialState={
        name:'',
        email:'',
        message:'',
    }

    const [values, setValues] = useState(initialState);
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validMessageRegex = /^[A-Za-z]{2,150}$/
    const validNameRegex = /^[A-Za-z]{2,16}$/
    
    
    const onChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    if(values.name.match(validNameRegex) && values.email.match(validEmailRegex) && values.message.match(validMessageRegex)){
        await addDoc(collection(db, 'messages'), {
        values,
      });
      alert('mensaje enviado')
    }
    else{
      alert('Revisa todos los campos')
    }
	};

    return{
        onChange,
        handleSubmit
    }
}