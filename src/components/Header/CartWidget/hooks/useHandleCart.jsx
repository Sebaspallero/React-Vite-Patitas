import {useState} from 'react'

export const UseHandleCart = () =>{

    const [cartView, setCartView] = useState(false)

    const handleCart = ()=> {
        setTimeout(()=>{
            setCartView(!cartView)
        },100)
       
    }

    return{
        cartView,
        handleCart
    }
}