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
    
    const onChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
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

    return{
        onChange,
        handleSubmit
    }
}