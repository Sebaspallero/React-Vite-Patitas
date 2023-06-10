import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { getDoc,doc} from "firebase/firestore";
import { db } from '../../../../firebase/firebase';

export const useFetch = () =>{

    const [product, setProduct]= useState([])
    const [error, setError] = useState(null)
    const {id} = useParams();
    
    useEffect(()=>{
       try{
            const productRef = doc(db, 'products', id);
            getDoc(productRef)
                .then(res=> setProduct({id:res.id, ...res.data()}))
       }
       catch(err){
        setError(err)
       }
    },
    [id])

    return{
        product,
        error
    }

}