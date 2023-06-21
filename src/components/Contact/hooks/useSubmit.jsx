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
    const [open, setOpen] = useState(false);
    const [succes, setSucces] = useState(false)
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validMessageRegex = /^[A-Za-z0-9]{2,150}$/
    const validNameRegex = /^[A-Za-z]{2,16}$/
    
    
    const onChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    if(values.name.match(validNameRegex) && values.email.match(validEmailRegex) && values.message !== null){
        await addDoc(collection(db, 'messages'), {
        values,
      });
      setSucces(true);
      setOpen(true);  
    }
    else{
      setSucces(false)
      setOpen(true);
    }
	};

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


    return{
        onChange,
        handleSubmit,
        open, 
        succes,
        handleClose
    
    }
}