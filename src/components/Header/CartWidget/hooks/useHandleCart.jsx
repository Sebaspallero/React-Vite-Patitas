import {useState, useEffect} from 'react'

export const UseHandleCart = () =>{

    const [cartView, setCartView] = useState(false)
    const handleCart = ()=> {
        setCartView(!cartView)
    }

    return{
        handleCart,
        cartView,
    }
}