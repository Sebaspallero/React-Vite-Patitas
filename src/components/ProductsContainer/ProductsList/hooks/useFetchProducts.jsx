import { useEffect, useState} from 'react'
import { productsCollectRef } from '../../../../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsOnContext } from '../../../../context/productSlice'
import { useParams } from 'react-router-dom'
import { getDocs, query, where} from "firebase/firestore";


export const useFetchProducts = () => {
  const dispatch = useDispatch()
  const {category} = useParams()
  const [loading, setLoading] = useState(false)
  const products = useSelector((state) => state.products.productsList)

    useEffect(()=>{
        try {
            setLoading(true)
            if(category){
                const ProductCategory = query(productsCollectRef, where('category', '==', category))
                getDocs(ProductCategory)
                    .then(res => dispatch(setProductsOnContext(res.docs.map((doc) => ({...doc.data(), id: doc.id})))))
                    setTimeout(()=>{
                        setLoading(false)
                    },500)
            }
            else{
                setLoading(true)
                getDocs(productsCollectRef)
                    .then(res => dispatch(setProductsOnContext(res.docs.map((doc) => ({...doc.data(), id: doc.id})))))
                    setTimeout(()=>{
                        setLoading(false)
                    },500)
            }
        } catch (err) {
            console.log(err)
        }
    }, [category]) 

    return {
        products,
        loading
    }
  }
